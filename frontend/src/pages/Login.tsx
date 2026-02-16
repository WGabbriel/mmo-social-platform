import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <Gamepad2 className="h-7 w-7 text-primary" />
            <span className="text-xl font-semibold">TavernHub</span>
          </Link>
          <p className="text-muted-foreground text-sm">Entre na sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="gamer@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Não tem conta?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">Cadastrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
