import { useParams } from "react-router";
import { useItemDetailRouter } from "@/collectionables/hooks/useItemDetailRouter";
import { Navigate } from "react-router";

export const ItemDetailRouter = () => {
  const { itemCategory } = useParams<{ itemCategory: string }>();
  const page = useItemDetailRouter({ itemCategory: itemCategory ?? "" });

  if (!itemCategory) return <Navigate to="/" />;

  return page;
};
