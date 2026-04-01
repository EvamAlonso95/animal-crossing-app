import { useQuery } from "@tanstack/react-query";
import { getFossilAction } from "../fossils/actions/get-fossil.action";
import { getFishAction } from "../fishes/actions/get-fish.action";
import { getBugAction } from "../bugs/actions/get-bug.action";
import { getBugAction as getMolluskAction } from "../mollusks/action/get-mollusk.action";

type Category = "fossils" | "fishes" | "bugs" | "sea";

const queryFnMap: Record<Category, (name: string) => Promise<unknown>> = {
  fossils: getFossilAction,
  fishes: getFishAction,
  bugs: getBugAction,
  sea: getMolluskAction,
};

export const useGetCategory = (itemCategory: string, itemName: string) => {
  return useQuery({
    queryKey: [itemCategory, itemName],
    queryFn: () => {
      const fn = queryFnMap[itemCategory as Category];
      if (!fn) throw new Error(`Unknown category: ${itemCategory}`);
      return fn(itemName);
    },
    enabled: !!itemCategory && !!itemName,
  });
};
