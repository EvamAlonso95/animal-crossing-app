import { useQuery } from "@tanstack/react-query";
import { getFossilAction } from "../fossils/actions/get-fossil.action";
import { getFishAction } from "../fishes/actions/get-fish.action";
import { getBugAction } from "../bugs/actions/get-bug.action";
import { getBugAction as getMolluskAction } from "../mollusks/action/get-mollusk.action";
import type { Fossil } from "../types/fossil.interface";
import type { Fish } from "../types/fish.interface";
import type { Bug } from "../types/bug.interface";
import type { Mollusk } from "../types/mollusk.interface";

type Category = "fossils" | "fishes" | "bugs" | "sea";
export type CategoryItem = Fossil | Fish | Bug | Mollusk;

const queryFnMap: Record<Category, (name: string) => Promise<CategoryItem>> = {
  fossils: getFossilAction as (name: string) => Promise<CategoryItem>,
  fishes: getFishAction as (name: string) => Promise<CategoryItem>,
  bugs: getBugAction as (name: string) => Promise<CategoryItem>,
  sea: getMolluskAction as (name: string) => Promise<CategoryItem>,
};

export const useGetCategory = (itemCategory: string, itemName: string) => {
  return useQuery<CategoryItem>({
    queryKey: [itemCategory, itemName],
    queryFn: () => {
      const fn = queryFnMap[itemCategory as Category];
      if (!fn) throw new Error(`Unknown category: ${itemCategory}`);
      return fn(itemName);
    },
    enabled: !!itemCategory && !!itemName,
  });
};
