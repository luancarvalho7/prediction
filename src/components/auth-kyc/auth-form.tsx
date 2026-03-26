"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = mode === "login";

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-1">
          {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
        </h1>
        <p className="text-sm text-muted/60">
          {isLogin ? "Entre para começar a negociar" : "Comece a negociar em minutos"}
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isLogin && (
          <div className="text-right">
            <Link href="/forgot-password" className="text-xs text-accent/70 hover:text-accent transition-colors">
              Esqueceu a senha?
            </Link>
          </div>
        )}

        <Button type="submit" variant="primary" className="w-full" size="lg">
          {isLogin ? "Entrar" : "Criar conta"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/[0.04]" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted/60">ou continue com</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline">Google</Button>
        <Button variant="outline">Apple</Button>
      </div>

      <p className="text-center text-xs text-muted/60">
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
        <Link href={isLogin ? "/signup" : "/login"} className="text-accent/70 hover:text-accent transition-colors">
          {isLogin ? "Cadastrar" : "Entrar"}
        </Link>
      </p>

      {!isLogin && (
        <p className="text-center text-xs text-muted/60">
          Ao criar uma conta, você concorda com os nossos{" "}
          <Link href="/community-guidelines" className="text-accent/70 hover:text-accent transition-colors">Termos</Link> e{" "}
          <Link href="/regulation" className="text-accent/70 hover:text-accent transition-colors">Política de Privacidade</Link>.
        </p>
      )}
    </div>
  );
}
