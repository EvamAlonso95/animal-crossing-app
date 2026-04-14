import { Navigate } from "react-router";
import { FossilPage } from "@/collectionables/fossils/page/FossilPage";

export interface Props {
  itemCategory: string;
}

export const useItemDetailRouter = ({ itemCategory }: Props) => {
  switch (itemCategory) {
    case "fossils":
      return <FossilPage />;

    default:
      return <Navigate to="/" />;
  }
};
