import { useQuery } from "@tanstack/react-query";

export const useAllCollectionables = <TData,>(
  queryKey: string,
  queryFn: () => Promise<TData>,
) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    staleTime: 1000 * 60 * 5,
  });
};
