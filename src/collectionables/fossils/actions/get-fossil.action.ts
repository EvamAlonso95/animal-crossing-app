import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fossil } from "../types/fossil.interface";

export const getAllFossilAction = async (
  itemName: string,
): Promise<Fossil[]> => {
  const { data } = await AnimalCrossingApi.get<Fossil[]>(
    `/${itemName}/individuals`,
  );

  return data;
};
