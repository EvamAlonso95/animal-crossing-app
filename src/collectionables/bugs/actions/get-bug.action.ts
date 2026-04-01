import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Bug } from "@/collectionables/types/bug.interface";

export const getBugAction = async (bugName: string): Promise<Bug> => {
  const { data } = await AnimalCrossingApi.get<Bug>(`/bugs/${bugName}`);

  return data;
};
