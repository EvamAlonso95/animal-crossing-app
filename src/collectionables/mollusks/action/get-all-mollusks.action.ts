import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Mollusk } from "@/collectionables/types/mollusk.interface";

export const getAllMollusksAction = async (
  searchQuery?: string,
): Promise<Mollusk[]> => {
  const { data } = await AnimalCrossingApi.get<Mollusk[]>("/sea", {
    params: searchQuery ? { item: searchQuery } : undefined,
  });

  return data;
};
