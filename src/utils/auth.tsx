import { useEffect, useState, useContext, createContext, ReactNode } from 'react';
import { supabase } from '../supabaseClient';

interface UserProfile {
  id: string;
  full_name: string;
  avatar_url: string;
  is_admin: boolean;
}

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener?.subscription.unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function requireAuth(Component: any) {
  return function Wrapped(props: any) {
    const { user } = useAuth();
    if (!user) {
      window.location.href = '/signin';
      return null;
    }
    return <Component {...props} />;
  };
}

// Placeholder function for checking invite codes
// Replace this with your real backend/API logic
export async function checkInviteCode(inviteCode: string, userId?: string): Promise<boolean> {
  // TODO: Implement real invite code verification (API call, database check, etc.)
  // For now, accept any non-empty invite code as valid
  if (!inviteCode) return false;
  // Optionally use userId for additional checks
  return true;
}
