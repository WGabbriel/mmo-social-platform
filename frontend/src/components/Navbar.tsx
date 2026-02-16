import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  userName?: string;
  isLoggedIn?: boolean;
}

const Navbar = ({ userName = "Gamer", isLoggedIn = true }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex h-14 items-center justify-between">
        <Link to={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">TavernHub</span>
        </Link>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{userName}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button size="sm" onClick={() => navigate("/register")}>
                Cadastrar
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
