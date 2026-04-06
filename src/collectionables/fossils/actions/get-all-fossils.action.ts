import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fossil } from "../../types/fossil.interface";

export const getAllFossilAction = async (
  searchQuery?: string,
): Promise<Fossil[]> => {
  const { data } = await AnimalCrossingApi.get<Fossil[]>(
    "/fossils/individuals",
    {
      params: searchQuery ? { item: searchQuery } : undefined,
    },
  );

  return data;
};
