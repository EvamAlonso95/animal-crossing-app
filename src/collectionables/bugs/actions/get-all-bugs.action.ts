import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Bug } from "@/collectionables/types/bug.interface";

export const getAllBugsAction = async (): Promise<Bug[]> => {
  const { data } = await AnimalCrossingApi.get<Bug[]>("/bugs");

  return data;
};
