import { ItemCard } from "@/components/ItemCard";
import { useParams } from "react-router";
import { CustomBreadCrums } from "../components/Custom/CustomBreadCrums";
import { useGetcategoryNameEsp } from "../hooks/useGetcategoryNameEsp";
import { useGetTotalItems } from "../hooks/useGetTotalItems";

import { CustomSeach } from "../components/Common/CustomSeach";

export const CollectionList = () => {
  const { itemCategory } = useParams();
  // Componente de busqueda
  const categoryName = useGetcategoryNameEsp(itemCategory ?? "");
  const totalItemsMap = useGetTotalItems();

  const totalCount =
    itemCategory === "fossils"
      ? totalItemsMap.fossils
      : itemCategory === "fishes"
        ? totalItemsMap.fishes
        : itemCategory === "bugs"
          ? totalItemsMap.bugs
          : itemCategory === "sea"
            ? totalItemsMap.sea
            : 0;

  return (
    <div className="w-[80%] flex justify-center flex-col mx-auto">
      <CustomBreadCrums categoryName={categoryName} totalCount={totalCount} />
      <div className="w-fit mx-auto flex flex-col">
        <div className="relative mb-6">
          {/* Componetizar el search */}
          <CustomSeach />
        </div>
        <div className="gap-8 mb-8 flex flex-wrap justify-around">
          <ItemCard itemCategory={itemCategory ?? ""} />
        </div>
      </div>
    </div>
  );
};
