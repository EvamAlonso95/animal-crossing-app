import { Search } from "lucide-react";

export const CustomSeach = () => {
  return (
    <>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
      <input
        type="text"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre..."
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-card text-foreground font-body text-sm
           placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime-400/30 transition-shadow"
      />
    </>
  );
};
