"use client";

import { AuthForm } from "@/components/auth-kyc/auth-form";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto py-16 w-full">
        <AuthForm mode="signup" />
      </div>
    </div>
  );
}
