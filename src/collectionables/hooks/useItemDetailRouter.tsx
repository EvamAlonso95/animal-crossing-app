import { Navigate } from "react-router";
import { FossilPage } from "@/collectionables/fossils/page/FossilPage";
import { FishesPage } from "@/collectionables/fishes/pages/FishesPage";

export interface Props {
  itemCategory: string;
}

export const useItemDetailRouter = ({ itemCategory }: Props) => {
  switch (itemCategory) {
    case "fossils":
      return <FossilPage />;
    case "fishes":
      return <FishesPage />;
    default:
      return <Navigate to="/" />;
  }
};
