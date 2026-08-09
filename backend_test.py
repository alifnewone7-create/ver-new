#!/usr/bin/env python3
"""
Backend API smoke tests for v-new import.
Tests admin auth, session management, user management, and gated endpoints.
"""

import requests
import json
from typing import Dict, Any, Optional

# Base URL from .env
BASE_URL = "https://vnew-full-stack.preview.emergentagent.com"

# Admin credentials from lib/server/admin-auth.ts
ADMIN_CREDS = {
    "username": "AYAN0004",
    "password": "SXON@TOP009",
    "secretKey": "sec_K9#mT4@Xv8!Qa2$Lf7&Np5^Hs1*Dz6%Rw3@Ju0#Ce9$By4&Gk8*Pm2^Yn5!Vo7"
}

WRONG_CREDS = {
    "username": "WRONG",
    "password": "WRONG",
    "secretKey": "WRONG"
}


def print_test_header(test_name: str):
    """Print a formatted test header."""
    print(f"\n{'='*80}")
    print(f"TEST: {test_name}")
    print(f"{'='*80}")


def print_result(endpoint: str, status: int, body: Any, cookies: Optional[Dict] = None):
    """Print test result in a formatted way."""
    print(f"\nEndpoint: {endpoint}")
    print(f"Status Code: {status}")
    if cookies:
        print(f"Cookies: {cookies}")
    print(f"Response Body: {json.dumps(body, indent=2) if isinstance(body, dict) else body}")


def test_admin_login_success():
    """Test 1: POST /api/admin/login with correct credentials."""
    print_test_header("Admin Login - Success")
    
    url = f"{BASE_URL}/api/admin/login"
    try:
        response = requests.post(url, json=ADMIN_CREDS, timeout=10)
        cookies = dict(response.cookies)
        
        print_result("/api/admin/login (correct creds)", response.status_code, response.json(), cookies)
        
        # Check for session cookie
        if 'sx_portal_session' in cookies:
            print("✅ SUCCESS: Session cookie 'sx_portal_session' set")
            return cookies.get('sx_portal_session')
        else:
            print("❌ FAIL: Session cookie 'sx_portal_session' NOT set")
            return None
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")
        return None


def test_admin_login_failure():
    """Test 2: POST /api/admin/login with wrong credentials."""
    print_test_header("Admin Login - Failure (Wrong Credentials)")
    
    url = f"{BASE_URL}/api/admin/login"
    try:
        response = requests.post(url, json=WRONG_CREDS, timeout=10)
        print_result("/api/admin/login (wrong creds)", response.status_code, response.json())
        
        if response.status_code == 401:
            print("✅ SUCCESS: Correctly returned 401 for wrong credentials")
        else:
            print(f"❌ FAIL: Expected 401, got {response.status_code}")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_admin_session_without_cookie():
    """Test 3: GET /api/admin/session without cookie."""
    print_test_header("Admin Session - Without Cookie")
    
    url = f"{BASE_URL}/api/admin/session"
    try:
        response = requests.get(url, timeout=10)
        body = response.json()
        print_result("/api/admin/session (no cookie)", response.status_code, body)
        
        if body.get('authed') == False:
            print("✅ SUCCESS: Correctly returned authed=false without cookie")
        else:
            print(f"❌ FAIL: Expected authed=false, got {body}")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_admin_session_with_cookie(session_cookie: str):
    """Test 4: GET /api/admin/session with valid cookie."""
    print_test_header("Admin Session - With Valid Cookie")
    
    url = f"{BASE_URL}/api/admin/session"
    try:
        cookies = {'sx_portal_session': session_cookie}
        response = requests.get(url, cookies=cookies, timeout=10)
        body = response.json()
        print_result("/api/admin/session (with cookie)", response.status_code, body)
        
        if body.get('authed') == True:
            print("✅ SUCCESS: Correctly returned authed=true with valid cookie")
        else:
            print(f"❌ FAIL: Expected authed=true, got {body}")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_admin_users(session_cookie: str):
    """Test 5: GET /api/admin/users with valid session cookie."""
    print_test_header("Admin Users - Firebase RTDB Connection Test")
    
    url = f"{BASE_URL}/api/admin/users"
    try:
        cookies = {'sx_portal_session': session_cookie}
        response = requests.get(url, cookies=cookies, timeout=15)
        
        print_result("/api/admin/users", response.status_code, response.text[:500] if len(response.text) > 500 else response.text)
        
        if response.status_code == 200:
            try:
                body = response.json()
                print("✅ SUCCESS: Firebase RTDB connection working")
                print(f"   - Users count: {len(body.get('users', []))}")
                print(f"   - Day: {body.get('day', 'N/A')}")
            except Exception:
                print("⚠️  WARNING: 200 response but not valid JSON")
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            print(f"   Full error: {response.text}")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_admin_logout(session_cookie: str):
    """Test 6: POST /api/admin/logout then verify session is cleared."""
    print_test_header("Admin Logout")
    
    url = f"{BASE_URL}/api/admin/logout"
    try:
        cookies = {'sx_portal_session': session_cookie}
        response = requests.post(url, cookies=cookies, timeout=10)
        body = response.json()
        print_result("/api/admin/logout", response.status_code, body)
        
        if response.status_code == 200 and body.get('ok') == True:
            print("✅ SUCCESS: Logout successful")
            
            # Now verify session is cleared
            print("\n--- Verifying session is cleared ---")
            session_url = f"{BASE_URL}/api/admin/session"
            session_response = requests.get(session_url, cookies=dict(response.cookies), timeout=10)
            session_body = session_response.json()
            print_result("/api/admin/session (after logout)", session_response.status_code, session_body)
            
            if session_body.get('authed') == False:
                print("✅ SUCCESS: Session correctly cleared after logout")
            else:
                print(f"❌ FAIL: Session still active after logout: {session_body}")
        else:
            print(f"❌ FAIL: Logout failed with status {response.status_code}")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_signals_live_without_token():
    """Test 7: POST /api/signals/live without Authorization token."""
    print_test_header("Signals Live - Without Token")
    
    url = f"{BASE_URL}/api/signals/live"
    try:
        response = requests.post(url, json={}, timeout=10)
        print_result("/api/signals/live (no token)", response.status_code, response.text[:200])
        
        if response.status_code in [401, 403]:
            print(f"✅ SUCCESS: Correctly returned {response.status_code} without token")
        else:
            print(f"⚠️  INFO: Got {response.status_code} (expected 401/403)")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_signals_future_without_token():
    """Test 8: POST /api/signals/future without Authorization token."""
    print_test_header("Signals Future - Without Token")
    
    url = f"{BASE_URL}/api/signals/future"
    try:
        response = requests.post(url, json={"count": 5}, timeout=10)
        print_result("/api/signals/future (no token)", response.status_code, response.text[:200])
        
        if response.status_code in [401, 403]:
            print(f"✅ SUCCESS: Correctly returned {response.status_code} without token")
        else:
            print(f"⚠️  INFO: Got {response.status_code} (expected 401/403)")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_news_without_token():
    """Test 9: GET /api/news without Authorization token."""
    print_test_header("News - Without Token")
    
    url = f"{BASE_URL}/api/news"
    try:
        response = requests.get(url, timeout=10)
        print_result("/api/news (no token)", response.status_code, response.text[:200])
        
        if response.status_code in [401, 403]:
            print(f"✅ SUCCESS: Correctly returned {response.status_code} without token")
        else:
            print(f"⚠️  INFO: Got {response.status_code} (expected 401/403)")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def test_analyze_without_token():
    """Test 10: POST /api/analyze without Authorization token (no image to avoid burning Groq quota)."""
    print_test_header("Analyze - Without Token")
    
    url = f"{BASE_URL}/api/analyze"
    try:
        # Send empty body to avoid burning Groq quota
        response = requests.post(url, json={}, timeout=10)
        print_result("/api/analyze (no token, no image)", response.status_code, response.text[:200])
        
        # We expect either 400 (no image) or 401/403 (no token)
        if response.status_code in [400, 401, 403]:
            print(f"✅ SUCCESS: Correctly returned {response.status_code}")
        else:
            print(f"⚠️  INFO: Got {response.status_code}")
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")


def main():
    """Run all backend tests."""
    print("\n" + "="*80)
    print("BACKEND API SMOKE TESTS - v-new Import")
    print("="*80)
    print(f"Base URL: {BASE_URL}")
    print("="*80)
    
    # Test 1: Login with correct credentials
    session_cookie = test_admin_login_success()
    
    # Test 2: Login with wrong credentials
    test_admin_login_failure()
    
    # Test 3: Session without cookie
    test_admin_session_without_cookie()
    
    if session_cookie:
        # Test 4: Session with valid cookie
        test_admin_session_with_cookie(session_cookie)
        
        # Test 5: Admin users (Firebase RTDB test)
        test_admin_users(session_cookie)
        
        # Test 6: Logout
        test_admin_logout(session_cookie)
    else:
        print("\n⚠️  SKIPPING tests 4-6: No valid session cookie obtained")
    
    # Test 7-10: Gated endpoints without tokens
    test_signals_live_without_token()
    test_signals_future_without_token()
    test_news_without_token()
    test_analyze_without_token()
    
    print("\n" + "="*80)
    print("ALL TESTS COMPLETED")
    print("="*80)


if __name__ == "__main__":
    main()
