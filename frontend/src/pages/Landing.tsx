import { useNavigate } from "react-router-dom";
import { Gamepad2, Users, Tv, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Gamepad2, title: "Crie Personagens", desc: "Dê vida aos seus heróis de MMO." },
    { icon: Users, title: "Conecte-se", desc: "Siga e interaja com outros jogadores." },
    { icon: Tv, title: "Lives", desc: "Transmita e assista gameplay ao vivo." },
    { icon: Swords, title: "Comunidade", desc: "Participe de uma rede gamer vibrante." },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">TavernHub</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Login</Button>
            <Button size="sm" onClick={() => navigate("/register")}>Cadastrar</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Sua identidade no universo dos games
          </h1>
          <p className="text-lg text-muted-foreground">
            Crie personagens, compartilhe aventuras e conecte-se com gamers de todo o mundo em uma rede social feita para MMOs.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/register")}
            className="text-base px-8"
          >
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border bg-card p-6 text-center space-y-3 hover:shadow-md transition-shadow"
              >
                <f.icon className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landing;
