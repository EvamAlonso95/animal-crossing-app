import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { FossilGroup } from "../../types/fossil.interface";

export const getAllFossilGroupsAction = async (): Promise<FossilGroup[]> => {
  const { data } = await AnimalCrossingApi.get<FossilGroup[]>("/fossils/all");
  return data;
};
