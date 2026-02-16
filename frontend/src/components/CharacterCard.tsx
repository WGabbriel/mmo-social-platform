import { useNavigate } from "react-router-dom";
import { Swords } from "lucide-react";

interface CharacterCardProps {
  id: string;
  name: string;
  game: string;
  avatar: string;
  classRole?: string;
}

const CharacterCard = ({ id, name, game, avatar, classRole }: CharacterCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/character/${id}/feed`)}
      className="group cursor-pointer rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={avatar}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold truncate">{name}</h3>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Swords className="h-3.5 w-3.5" />
          <span>{game}</span>
        </div>
        {classRole && (
          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
            {classRole}
          </span>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
