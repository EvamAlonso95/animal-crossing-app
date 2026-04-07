import { useQuery } from "@tanstack/react-query";
import { getAllFossilGroupsAction } from "../actions/get-all-fossil-groups.action";

export const useAllFossilGroups = () => {
  return useQuery({
    queryKey: ["fossil-groups"],
    queryFn: getAllFossilGroupsAction,
    staleTime: 1000 * 60 * 5,
  });
};
