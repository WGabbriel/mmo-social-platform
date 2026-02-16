import { useState } from "react";
import { useParams } from "react-router-dom";
import { Radio, UserPlus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { mockLives } from "@/data/mockData";

const LiveGameplay = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "Lyra", text: "Que jogada incrível! 🔥" },
    { user: "Kael", text: "Esse boss é difícil demais" },
    { user: "Nyx", text: "Usa a skill de stun!" },
    { user: "System", text: "Aethon acabou de seguir a live" },
  ]);

  const live = mockLives.find(l => l.id === id) || mockLives[0];

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: "Você", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar userName="GamerX" />

      <div className="flex-1 container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 h-[calc(100vh-8rem)]">
          {/* Player */}
          <div className="rounded-lg border bg-card overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <Radio className="h-5 w-5 text-destructive" />
                <div>
                  <h2 className="font-semibold">{live.characterName}</h2>
                  <span className="text-xs text-muted-foreground">{live.game}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{live.viewers} assistindo</span>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-1" /> Seguir
                </Button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center bg-muted/50">
              <div className="text-center space-y-3">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Radio className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Transmissão ao vivo</p>
                <p className="text-xs text-muted-foreground">Área do player de streaming</p>
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="rounded-lg border bg-card flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-sm">Chat ao Vivo</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className="text-sm">
                  <span className={`font-medium ${msg.user === "System" ? "text-muted-foreground" : "text-foreground"}`}>
                    {msg.user}:
                  </span>{" "}
                  <span className="text-muted-foreground">{msg.text}</span>
                </div>
              ))}
            </div>

            <div className="p-3 border-t flex gap-2">
              <Input
                placeholder="Enviar mensagem..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
              />
              <Button size="icon" onClick={sendMessage} className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveGameplay;
