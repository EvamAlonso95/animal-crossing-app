export type Category = "fossils" | "fishes" | "bugs" | "sea" | "musseum";

export const categoryLabels: Record<Category, string> = {
  fossils: "Fósiles",
  fishes: "Peces",
  bugs: "Insectos",
  sea: "Moluscos",
  musseum: "Museo",
};

export const categoryIcons: Record<Category, string> = {
  fossils: "🦴",
  fishes: "🐟",
  bugs: "🦋",
  sea: "🐚",
  musseum: "🏛",
};

export interface CategoryColors {
  outer: string;
  inner: string;
}

export const categoryBgClasses: Record<string, CategoryColors> = {
  fossils: { outer: "bg-pink-100", inner: "bg-pink-50" },
  fishes: { outer: "bg-cyan-100", inner: "bg-cyan-50" },
  bugs: { outer: "bg-amber-100", inner: "bg-amber-50" },
  sea: { outer: "bg-blue-100", inner: "bg-blue-50" },
  musseum: { outer: "bg-green-100", inner: "" },
};
