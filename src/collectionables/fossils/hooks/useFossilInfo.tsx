import { useQuery } from "@tanstack/react-query";
import { getFossilAction } from "../actions/get-fossil.action";

export const useFossilInfo = (fossilName: string) => {
  return useQuery({
    queryKey: ["fossil-info", fossilName],
    queryFn: () => getFossilAction(fossilName),
  });
};
