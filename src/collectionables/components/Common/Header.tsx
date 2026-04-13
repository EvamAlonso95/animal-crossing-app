import type { Category } from "@/collectionables/types/categories.interface";
import { categoryLabels } from "@/collectionables/types/categories.interface";

import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const categories: Category[] = ["fossils", "fishes", "bugs", "sea", "musseum"];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md font-acnh-title">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="h-7 w-7 animate-leaf-float text-lime-600" />
          <span className="font-display text-lg sm:text-xl font-black tracking-tight text-foreground">
            Animal Crossing <span className="text-lime-600">Museum</span>
          </span>
        </Link>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t bg-card px-4 py-3 flex flex-col gap-1">
          {categories.map((cat) => {
            const isActive = location.pathname.includes(cat);
            return (
              <Link
                key={cat}
                to={`${cat}`}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-display font-bold transition-colors
                  ${isActive ? "bg-lime-600 text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {categoryLabels[cat]}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
