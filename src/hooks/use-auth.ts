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
            await get().checkAuth();
            set({ isLoading: false });
            console.log('login: checkAuth finished, user:', get().user);
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
          const response = await fetch('/api/auth/me', { credentials: 'include' });
          const data = await response.json();
          console.log('checkAuth response:', data);

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
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    username: 'student',
    role: 'student',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    username: 'admin',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    firstName: 'Review',
    lastName: 'Committee',
    email: 'reviewer@example.com',
    username: 'reviewer',
    role: 'reviewer',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    firstName: 'Scholarship',
    lastName: 'Provider',
    email: 'provider@example.com',
    username: 'provider',
    role: 'provider',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

export function getDashboardRouteForRole(role: string) {
  if (role === 'admin') return '/admin/dashboard';
  if (role === 'coordinator') return '/coordinator/dashboard';
  return '/student/dashboard';
} 