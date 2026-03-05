import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fossil } from "../types/fossil.interface";

export const getAllFossilAction = async (): Promise<Fossil[]> => {
  const { data } = await AnimalCrossingApi.get<Fossil[]>(
    "/fossils/individuals",
  );

  return data;
};
