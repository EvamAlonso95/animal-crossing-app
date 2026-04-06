import { ItemCard } from "@/components/ItemCard";
import { useParams, useSearchParams } from "react-router";
import { CustomBreadCrums } from "../components/Custom/CustomBreadCrums";
import { useGetcategoryNameEsp } from "../hooks/useGetcategoryNameEsp";

export const CollectionList = () => {
  const { itemCategory } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";
  // Componente de busqueda
  const categoryName = useGetcategoryNameEsp(itemCategory ?? "");

  return (
    <div className="w-[80%] flex justify-center flex-col mx-auto">
      <CustomBreadCrums categoryName={categoryName} />
      <div className="w-fit mx-auto flex flex-col">
        <div className="gap-8 mb-8 flex flex-wrap justify-around">
          <ItemCard
            itemCategory={itemCategory ?? ""}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};
