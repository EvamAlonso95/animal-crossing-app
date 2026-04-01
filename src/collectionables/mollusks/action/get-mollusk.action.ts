import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Mollusk } from "@/collectionables/types/mollusk.interface";

export const getBugAction = async (mollusks: string): Promise<Mollusk> => {
  const { data } = await AnimalCrossingApi.get<Mollusk>(`/sea/${mollusks}`);

  return data;
};
