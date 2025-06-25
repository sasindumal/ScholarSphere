'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (userData: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (response.ok) {
            set({
              user: data.user,
              isAuthenticated: true,
              isLoading: false,
            });
            return { success: true, message: data.message };
          } else {
            set({ isLoading: false });
            return { success: false, message: data.error };
          }
        } catch (error) {
          set({ isLoading: false });
          return { success: false, message: 'Network error occurred' };
        }
      },

      signup: async (userData) => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          const data = await response.json();

          if (response.ok) {
            set({
              user: data.user,
              isAuthenticated: true,
              isLoading: false,
            });
            return { success: true, message: data.message };
          } else {
            set({ isLoading: false });
            return { success: false, message: data.error };
          }
        } catch (error) {
          set({ isLoading: false });
          return { success: false, message: 'Network error occurred' };
        }
      },

      logout: async () => {
        try {
          await fetch('/api/auth/logout', {
            method: 'POST',
          });
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      },

      checkAuth: async () => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/auth/me');
          const data = await response.json();

          if (response.ok) {
            set({
              user: data.user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);

// Mock users for testing
export const MOCK_USERS: User[] = [
  {
    user_id: '1',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    username: 'student',
    role: 'student',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    user_id: '2',
    first_name: 'Admin',
    last_name: 'User',
    email: 'admin@example.com',
    username: 'admin',
    role: 'admin',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    user_id: '3',
    first_name: 'Review',
    last_name: 'Committee',
    email: 'reviewer@example.com',
    username: 'reviewer',
    role: 'reviewer',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    user_id: '4',
    first_name: 'Scholarship',
    last_name: 'Provider',
    email: 'provider@example.com',
    username: 'provider',
    role: 'provider',
    created_at: '2024-01-01T00:00:00Z'
  }
]; 