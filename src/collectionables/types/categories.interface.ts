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
