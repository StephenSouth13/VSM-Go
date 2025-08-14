import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isGuest: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setGuestMode: (isGuest: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  const isAuthenticated = !!user && !isGuest;

  const login = async (email: string, password: string) => {
    // TODO: Implement real login logic
    // For now, simulate login
    const mockUser: User = {
      id: '1',
      name: 'Quach Thanh Long',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    };
    setUser(mockUser);
    setIsGuest(false);
  };

  const logout = () => {
    setUser(null);
    setIsGuest(false);
  };

  const setGuestMode = (guestMode: boolean) => {
    setIsGuest(guestMode);
    if (guestMode) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isGuest,
      login,
      logout,
      setGuestMode,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
