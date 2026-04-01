import { AnimalCrossingApi } from "@/collectionables/api/animalCrossing.api";
import type { Fossil } from "../../types/fossil.interface";

export const getFossilAction = async (fossilname: string): Promise<Fossil> => {
  console.log({ fossilname });

  const { data } = await AnimalCrossingApi.get<Fossil>(
    `/fossils/individuals/${fossilname}`,
  );

  return data;
};
