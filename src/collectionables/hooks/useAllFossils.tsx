import { useQuery } from "@tanstack/react-query";

import { getAllFossilAction } from "../fossils/actions/get-all-fossils.action";

export const useAllFossils = () => {
  return useQuery({
    queryKey: ["fossils"],
    queryFn: () => getAllFossilAction(),
    staleTime: 1000 * 60 * 5,
  });
};
