// /src/lib/auth/client.ts
import type { User } from '@/types/user';

const API_BASE_URL = process.env.NEXT_PUBLIC_ZINO_API_BASE_URL;

export interface SignInWithPasswordParams {
  phone: string;
  password: string;
}

interface ResetPasswordParams {
  phone: string;
}

export interface SignUpParams {
  password: string;
  phone: string;
  name: string;
  preset: 'beauty' | 'auto' | 'spa' | 'medical' | 'other';
  timezone?: string; 
}

interface ConfirmResetPasswordParams {
  token: string;
  password: string;
}

class AuthClient {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(token: string, user: User): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async signInWithPassword(params: SignInWithPasswordParams): Promise<{ data?: User; error?: string }> {
    const { phone, password } = params;

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.message || 'Invalid credentials' };
      }

      const result = await response.json();
      const { token, user } = result;
      this.login(token, user);

      return { data: user };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      return { error: errorMessage };
    }
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    const token = this.getToken();
    if (!token) {
      return { data: null };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        this.logout();
        return { data: null };
      }

      const user = await response.json();
      // console.log('API User Response:', user);
      localStorage.setItem('user', JSON.stringify(user));

      return { data: user };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      return { error: errorMessage };
    }
  }

  async signUp(params: SignUpParams): Promise<{ data?: User; error?: string }> {
    const { password, phone, name, timezone, preset } = params;

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, phone, name, timezone, preset }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.message || 'Unable to sign up' };
      }

      const result = await response.json();
      const { token, user } = result;
      this.login(token, user);

      return { data: user };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      return { error: errorMessage };
    }
  }

  // CLAIM THE BOOKING SITE & SIGN UP
  async claimSignUp(params: SignUpParams & { slug: string }) {
    const { password, phone, name, timezone, preset, slug } = params;
  
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/claim-signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, phone, name, timezone, preset, slug }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.message || 'Unable to sign up and claim' };
      }
  
      const result = await response.json();
      const { token, user } = result;
      this.login(token, user);
  
      return { data: user };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Something went wrong' };
    }
  }
  

  async resetPassword({ phone }: ResetPasswordParams) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.message || 'Unable to reset password' };
      }

      const result = await response.json();
      return { data: result };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      return { error: errorMessage };
    }
  }

  async confirmResetPassword({ token, password }: ConfirmResetPasswordParams): Promise<{ data?: any; error?: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/reset-password/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.error || 'Unable to reset password' };
      }

      const result = await response.json();
      return { data: result };
    } catch (err: any) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      return { error: errorMessage };
    }
  }

  async signOut(): Promise<{ error?: string }> {
    this.logout();
    return {};
  }
}

export const authClient = new AuthClient();
