import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { games } from "@/data/mockData";

const CreateCharacter = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", game: "", classRole: "", description: "", avatar: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen">
      <Navbar userName="GamerX" />

      <main className="container py-8 max-w-lg">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-primary" />
              Criar Personagem
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Dê vida ao seu novo herói</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-6 space-y-4">
            <div className="space-y-2">
              <Label>Nome do Personagem</Label>
              <Input
                placeholder="Ex: Aethon Shadowblade"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Jogo</Label>
              <Select onValueChange={val => setForm({ ...form, game: val })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o jogo" />
                </SelectTrigger>
                <SelectContent>
                  {games.map(g => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Classe / Raça (opcional)</Label>
              <Input
                placeholder="Ex: Mago Elfo"
                value={form.classRole}
                onChange={e => setForm({ ...form, classRole: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Avatar</Label>
              <div
                onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add("border-primary"); }}
                onDragLeave={e => { e.currentTarget.classList.remove("border-primary"); }}
                onDrop={e => {
                  e.preventDefault();
                  e.currentTarget.classList.remove("border-primary");
                  const file = e.dataTransfer.files[0];
                  if (file && file.type.startsWith("image/")) {
                    setForm({ ...form, avatar: URL.createObjectURL(file) });
                  }
                }}
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.onchange = (ev) => {
                    const file = (ev.target as HTMLInputElement).files?.[0];
                    if (file) setForm({ ...form, avatar: URL.createObjectURL(file) });
                  };
                  input.click();
                }}
                className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
              >
                {form.avatar ? (
                  <img src={form.avatar} alt="Avatar" className="h-24 w-24 rounded-full mx-auto object-cover" />
                ) : (
                  <p className="text-sm text-muted-foreground">Arraste uma imagem ou clique para selecionar</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea
                placeholder="Conte a história do seu personagem..."
                rows={4}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => navigate("/dashboard")} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                Salvar Personagem
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateCharacter;
