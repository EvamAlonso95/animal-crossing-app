import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Mollusk } from "@/collectionables/types/mollusk.interface";


export const getAllMollusksAction = async (): Promise<Mollusk[]> => {
  const { data } = await AnimalCrossingApi.get<Mollusk[]>("/sea");

  return data;
};
