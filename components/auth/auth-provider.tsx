"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";

const AuthContext = createContext<ReturnType<typeof useAuth>>({
  user: null,
  profile: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const auth = useAuth();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <AuthLoadingState />;
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function AuthLoadingState() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}