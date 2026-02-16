import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PostCardProps {
  id: string;
  characterId: string;
  characterName: string;
  characterAvatar: string;
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const PostCard = ({
  characterId,
  characterName,
  characterAvatar,
  content,
  likes: initialLikes,
  comments,
  timeAgo,
}: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);
  const navigate = useNavigate();

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="rounded-lg border bg-card p-5 space-y-4">
      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={characterAvatar}
          alt={characterName}
          onClick={() => navigate(`/character/${characterId}`)}
          className="h-10 w-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
        />
        <div className="flex-1">
          <span
            onClick={() => navigate(`/character/${characterId}`)}
            className="font-medium cursor-pointer hover:underline"
          >
            {characterName}
          </span>
          <p className="text-xs text-muted-foreground">{timeAgo}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed">{content}</p>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-2 border-t">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-1.5 text-sm transition-colors ${
            liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          <span>{likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{comments}</span>
        </button>
      </div>

      {/* Comment input */}
      {showComments && (
        <div className="flex gap-2 animate-in fade-in">
          <Input placeholder="Escreva um comentário..." className="flex-1" />
          <Button size="icon" variant="ghost">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
