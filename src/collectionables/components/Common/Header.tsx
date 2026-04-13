import type { Category } from "@/collectionables/types/categories.interface";
import { categoryLabels } from "@/collectionables/types/categories.interface";

import { Leaf } from "lucide-react";
import { Link, useLocation } from "react-router";

const categories: Category[] = ["fossils", "fishes", "bugs", "sea", "musseum"];

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md font-acnh-title">
      <div className="w-[80%] mx-auto flex justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="h-7 w-7 animate-leaf-float text-lime-600" />
          <span className="font-display text-xl font-black tracking-tight text-foreground">
            Animal Crossing <span className="text-lime-600">Museum</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {categories.map((cat) => {
            const isActive = location.pathname.includes(cat);
            return (
              <Link
                key={cat}
                to={`${cat}`}
                className={`px-3 py-1.5 rounded-4xl text-sm font-display font-bold transition-colors
                  ${isActive ? "bg-lime-600 text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {categoryLabels[cat]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
