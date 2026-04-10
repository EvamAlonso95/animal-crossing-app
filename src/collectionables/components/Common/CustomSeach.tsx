import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRef, type KeyboardEvent } from "react";
import { useSearchParams } from "react-router";

export const CustomSeach = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get("query") || "";

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    const value = inputRef.current?.value ?? "";
    setSearchParams(value ? { query: value } : {});
    if (inputRef.current) inputRef.current.value = "";
  };
  return (
    <>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-6  " />
      <Input
        type="text"
        ref={inputRef}
        onKeyDown={handleSearch}
        defaultValue={query}
        placeholder="Buscar por nombre..."
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-card text-foreground font-body text-sm
           placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-lime-600/20 focus-visible:border-lime-600/20transition-shadow"
      />
    </>
  );
};
