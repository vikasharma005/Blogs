"use client";

import { Card } from "@/components/ui/card";
import { AuthForm } from "@/components/auth/auth-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <AuthForm type="register" />
        <p className="text-center mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}