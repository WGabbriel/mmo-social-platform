import { useState } from "react";
import { useParams } from "react-router-dom";
import { UserPlus, UserMinus, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { mockCharacters, mockPosts } from "@/data/mockData";

const CharacterProfile = () => {
  const { id } = useParams();
  const [following, setFollowing] = useState(false);

  const character = mockCharacters.find(c => c.id === id) || mockCharacters[0];
  const characterPosts = mockPosts.filter(p => p.characterId === character.id);

  return (
    <div className="min-h-screen">
      <Navbar userName="GamerX" />

      <main className="container py-8 max-w-2xl space-y-6">
        {/* Profile header */}
        <div className="rounded-lg border bg-card p-8 text-center space-y-4">
          <img
            src={character.avatar}
            alt={character.name}
            className="h-24 w-24 rounded-full mx-auto object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{character.name}</h1>
            <p className="text-muted-foreground text-sm">{character.game}</p>
            {character.classRole && (
              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                {character.classRole}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">{character.description}</p>

          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="font-bold text-lg">{character.followers}</p>
              <p className="text-muted-foreground text-xs">Seguidores</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{character.following}</p>
              <p className="text-muted-foreground text-xs">Seguindo</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{character.totalPosts}</p>
              <p className="text-muted-foreground text-xs">Posts</p>
            </div>
          </div>

          <Button
            onClick={() => setFollowing(!following)}
            variant={following ? "outline" : "default"}
          >
            {following ? (
              <><UserMinus className="h-4 w-4 mr-2" /> Deixar de Seguir</>
            ) : (
              <><UserPlus className="h-4 w-4 mr-2" /> Seguir</>
            )}
          </Button>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            Posts
          </h2>
          {characterPosts.length > 0 ? (
            characterPosts.map(post => <PostCard key={post.id} {...post} />)
          ) : (
            <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
              Nenhum post ainda.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CharacterProfile;
