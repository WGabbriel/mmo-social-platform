import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, PenSquare, Search, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PostCard from "@/components/PostCard";
import { mockCharacters, mockPosts, mockLives } from "@/data/mockData";
import Navbar from "@/components/Navbar";

const CharacterFeed = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState("");
  const character = mockCharacters[0];

  return (
    <div className="min-h-screen">
      <Navbar userName="GamerX" />

      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_260px] gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block space-y-4">
            <div className="rounded-lg border bg-card p-5 text-center space-y-3">
              <img
                src={character.avatar}
                alt={character.name}
                className="h-16 w-16 rounded-full mx-auto object-cover"
              />
              <h3 className="font-semibold">{character.name}</h3>
              <p className="text-xs text-muted-foreground">{character.game}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 text-xs"
                  onClick={() => navigate(`/character/${character.id}`)}
                >
                  <User className="h-3.5 w-3.5 mr-1" /> Perfil
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <PenSquare className="h-3.5 w-3.5 mr-1" /> Post
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4 space-y-3">
              <h4 className="font-medium text-sm text-muted-foreground">Seguindo</h4>
              {mockCharacters.slice(1).map(c => (
                <div
                  key={c.id}
                  onClick={() => navigate(`/character/${c.id}`)}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-pointer transition-colors"
                >
                  <img src={c.avatar} alt={c.name} className="h-8 w-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{c.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{c.game}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Central Feed */}
          <main className="space-y-4">
            {/* Lives dos seguidos */}
            {mockLives.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {mockLives.map(live => (
                  <div
                    key={live.id}
                    onClick={() => navigate(`/live/${live.id}`)}
                    className="flex-shrink-0 flex items-center gap-2 rounded-lg border bg-card px-4 py-3 cursor-pointer hover:bg-accent transition-colors"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{live.characterName}</p>
                      <p className="text-xs text-muted-foreground">{live.game} · {live.viewers} assistindo</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="rounded-lg border bg-card p-4 space-y-3">
              <Textarea
                placeholder="O que está acontecendo no seu mundo?"
                value={newPost}
                onChange={e => setNewPost(e.target.value)}
                rows={3}
                className="resize-none"
              />
              <div className="flex justify-end">
                <Button size="sm">Publicar</Button>
              </div>
            </div>

            {mockPosts.map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block space-y-4">
            <div className="rounded-lg border bg-card p-4 space-y-3">
              <h4 className="font-medium text-sm text-muted-foreground">Buscar Personagens</h4>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-9" />
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4 space-y-3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Radio className="h-4 w-4 text-destructive" />
                <span className="text-muted-foreground">Lives Ativas</span>
              </h4>
              {mockLives.map(live => (
                <div
                  key={live.id}
                  onClick={() => navigate(`/live/${live.id}`)}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-accent cursor-pointer transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium">{live.characterName}</p>
                    <p className="text-xs text-muted-foreground">{live.game}</p>
                  </div>
                  <span className="text-xs text-destructive font-medium">{live.viewers} 👁</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CharacterFeed;
