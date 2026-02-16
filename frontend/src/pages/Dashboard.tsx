import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/CharacterCard";
import { mockCharacters } from "@/data/mockData";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar userName="GamerX" />

      <main className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Seus Personagens</h1>
            <p className="text-muted-foreground text-sm">Gerencie e acesse seus heróis</p>
          </div>
          <Button onClick={() => navigate("/create-character")} className="gap-2">
            <Plus className="h-4 w-4" />
            Criar Personagem
          </Button>
        </div>

        {/* Character grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {mockCharacters.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              game={char.game}
              avatar={char.avatar}
              classRole={char.classRole}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
