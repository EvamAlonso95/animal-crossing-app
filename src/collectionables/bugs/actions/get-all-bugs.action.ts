import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Bug } from "@/collectionables/types/bug.interface";

export const getAllBugsAction = async (
  searchQuery?: string,
): Promise<Bug[]> => {
  const { data } = await AnimalCrossingApi.get<Bug[]>("/bugs", {
    params: searchQuery ? { item: searchQuery } : undefined,
  });
  // Deduplicate by `number` (unique id provided by API) using Set+filter

  const seen = new Set<number>();
  const uniq = data.filter((bug) => {
    if (!bug || typeof bug.number !== "number") return false;
    if (seen.has(bug.number)) return false;
    seen.add(bug.number);
    return true;
  });

  return uniq;
};
