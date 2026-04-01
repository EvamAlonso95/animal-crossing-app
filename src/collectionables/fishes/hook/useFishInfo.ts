import { useQuery } from "@tanstack/react-query";
import { getFishAction } from "../actions/get-fish.action";

export const useFishInfo = (fishName: string) => {
  return useQuery({
    queryKey: ["fish-info", fishName],
    queryFn: () => getFishAction(fishName),
  });
};
