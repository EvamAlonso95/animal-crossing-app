import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full border-t bg-card/50 py-6 mt-12">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="h-4 w-4 text-primary" />
          <span className="font-display text-sm font-bold text-muted-foreground">
            Animal Crossing Museum Tracker
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Datos proporcionados por{" "}
          <a
            href="https://api.nookipedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            ACNH API
          </a>
          . Animal Crossing™ es propiedad de Nintendo.
        </p>
      </div>
    </footer>
  );
};
