export interface Props {
  itemCategory: string;
}

export const useGetcategoryNameEsp = (itemCategory: string) => {
  const displayName =
    itemCategory === "fossils"
      ? "Fósiles"
      : itemCategory === "fishes"
        ? "Peces"
        : itemCategory === "bugs"
          ? "Bichos"
          : itemCategory === "sea"
            ? "Moluscos"
            : itemCategory === "musseum"
              ? "Museo"
              : itemCategory;

  return displayName;
};
