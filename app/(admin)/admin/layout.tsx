"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { useAuth } from "@/hooks/use-auth";
import { isAdmin } from "@/lib/auth/roles";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !isAdmin(profile))) {
      router.push("/login");
    }
  }, [user, profile, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || !isAdmin(profile)) {
    return null;
  }

  return (
    <div className="grid grid-cols-[240px,1fr] min-h-[calc(100vh-4rem)]">
      <AdminSidebar />
      <main className="p-6">{children}</main>
    </div>
  );
}