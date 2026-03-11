import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fish } from "@/collectionables/fossils/types/fish.interface";

export const getFishAction = async (fishname: string): Promise<Fish> => {
  const { data } = await AnimalCrossingApi.get<Fish>(
    `/fossils/individuals/${fishname}`,
  );

  return data;
};
