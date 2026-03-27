import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Bug } from "@/collectionables/types/bug.interface";

export const getBugAction = async (fishname: string): Promise<Bug> => {
  const { data } = await AnimalCrossingApi.get<Bug>(
    `/fossils/individuals/${fishname}`,
  );

  return data;
};
