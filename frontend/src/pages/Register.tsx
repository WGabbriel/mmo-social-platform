import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return toast({ variant: "destructive", title: "Erro", description: "As senhas não coincidem!" });
    }

    setLoading(true);
    try {
      await registerUser({
        username: form.username,
        email: form.email,
        password: form.password
      });
      toast({ title: "Sucesso!", description: "Conta criada com sucesso." });
      navigate("/login");
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      toast({
        variant: "destructive",
        title: "Erro no cadastro",
        description: error.response?.data?.message || "Erro ao conectar com o servidor."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <Gamepad2 className="h-7 w-7 text-primary" />
            <span className="text-xl font-semibold">TavernHub</span>
          </Link>
          <p className="text-muted-foreground text-sm">Crie sua conta de gamer</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Usuário (Nick)</Label>
            <Input id="username" placeholder="Seu nick" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="gamer@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirmar Senha</Label>
            <Input id="confirm" type="password" placeholder="••••••••" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Cadastrar"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;