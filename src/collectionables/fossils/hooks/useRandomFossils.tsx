import { useMemo } from "react";
import type {
  Fossil,
  FossilGroup,
  FossilGroupItem,
} from "../../types/fossil.interface";

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed === 0 ? 1 : seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Hook personalizado para seleccionar fósiles relacionados o 3 aleatorios
export const useRandomFossils = (
  fossils: Fossil[],
  groups: FossilGroup[],
  currentFossilName: string,
  seed: number = 0,
): (Fossil | FossilGroupItem)[] => {
  return useMemo(() => {
    const group = groups.find((g) =>
      g.fossils.some((f) => f.name === currentFossilName),
    );

    if (group) {
      return group.fossils.filter((f) => f.name !== currentFossilName);
    }

    // Fósil individual: selecciona 3 aleatorios usando seed determinista
    const pool = fossils.filter((f) => f.name !== currentFossilName);
    return seededShuffle(pool, seed).slice(0, 3);
  }, [fossils, groups, currentFossilName, seed]);
};
