import { useAllCollectionables } from "./useAllCollectionables";
import { getAllFossilAction } from "../fossils/actions/get-all-fossils.action";
import { getAllFishesAction } from "../fishes/actions/get-all-fishess.action";
import { getAllBugsAction } from "../bugs/actions/get-all-bugs.action";

import type { Category } from "../types/categories.interface";
import { getAllMollusksAction } from "../mollusks/action/get-all-mollusks.action";
import { useMuseum } from "../context/MusseumContext";

export const useGetTotalItems = () => {
  const { musseumCount } = useMuseum();
  const { data: fossils = [] } = useAllCollectionables(
    "fossils",
    getAllFossilAction,
  );
  const { data: fishes = [] } = useAllCollectionables(
    "fishes",
    getAllFishesAction,
  );

  const { data: bugs = [] } = useAllCollectionables("bugs", getAllBugsAction);

  const { data: mollusks = [] } = useAllCollectionables(
    "sea",
    getAllMollusksAction,
  );

  const totalItemsMap: Record<Category, number> = {
    fossils: fossils.length,
    fishes: fishes.length,
    bugs: bugs.length,
    sea: mollusks.length,
    musseum: musseumCount,
  };
  return totalItemsMap;
};
