import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fish } from "@/collectionables/types/fish.interface";

export const getAllFishesAction = async (
  searchQuery?: string,
): Promise<Fish[]> => {
  const { data } = await AnimalCrossingApi.get<Fish[]>("/fish", {
    params: searchQuery ? { item: searchQuery } : undefined,
  });

  return data;
};
