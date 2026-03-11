import { ItemCard } from "@/components/ItemCard";
import { useParams } from "react-router";

export const CollectionList = () => {
  const { itemCategory } = useParams();

  console.log({ itemCategory });
  return <ItemCard itemCategory={itemCategory ?? ""} />;
};
