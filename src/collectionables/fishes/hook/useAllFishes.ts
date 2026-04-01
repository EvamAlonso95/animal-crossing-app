import { useQuery } from "@tanstack/react-query";
import { getAllFishesAction } from "../actions/get-all-fishess.action";

export const useAllFishes = () => {
  return useQuery({
    queryKey: ["fishes"],
    queryFn: () => getAllFishesAction(),
    staleTime: 1000 * 60 * 5,
  });
};
