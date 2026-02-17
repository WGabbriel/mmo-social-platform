import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(form);
      toast({ title: "Bem-vindo!", description: "Login realizado com sucesso." });
      navigate("/dashboard");
    } catch (err: unknown) {
      const error = err as AxiosError<string>;
      toast({
        variant: "destructive",
        title: "Erro ao entrar",
        description: error.response?.data || "Verifique suas credenciais."
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
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;