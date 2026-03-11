import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fish } from "@/collectionables/fossils/types/fish.interface";

export const getAllFishesAction = async (): Promise<Fish[]> => {
  const { data } = await AnimalCrossingApi.get<Fish[]>("/fish");

  return data;
};
