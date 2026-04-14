export interface Props {
  itemCategory: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  fossils: "Fósiles",
  fishes: "Peces",
  bugs: "Bichos",
  sea: "Moluscos",
  musseum: "Museo",
};

export const useGetcategoryNameEsp = (itemCategory: string) => {
  return CATEGORY_NAMES[itemCategory] ?? itemCategory;
};
