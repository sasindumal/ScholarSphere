import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'admin' | 'student' | 'reviewer' | 'provider';

export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  role: UserRole;
  created_at: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-storage',
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