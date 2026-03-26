export type Category = "fossils" | "fish" | "bugs" | "sea";

export const categoryLabels: Record<Category, string> = {
  fossils: "Fósiles",
  fish: "Peces",
  bugs: "Insectos",
  sea: "Moluscos",
};

export const categoryIcons: Record<Category, string> = {
  fossils: "🦴",
  fish: "🐟",
  bugs: "🦋",
  sea: "🐚",
};
