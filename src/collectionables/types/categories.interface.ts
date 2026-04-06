export type Category = "fossils" | "fishes" | "bugs" | "sea";

export const categoryLabels: Record<Category, string> = {
  fossils: "Fósiles",
  fishes: "Peces",
  bugs: "Insectos",
  sea: "Moluscos",
};

export const categoryIcons: Record<Category, string> = {
  fossils: "🦴",
  fishes: "🐟",
  bugs: "🦋",
  sea: "🐚",
};

export const categoryBgClasses: Record<Category, string> = {
  fossils: "bg-pink-400/20",
  fishes: "bg-cyan-300/20",
  bugs: "bg-amber-900/20",
  sea: "bg-blue-700/20",
};
