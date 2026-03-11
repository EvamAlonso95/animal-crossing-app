import { useMemo } from "react";
import type { Fossil } from "../../types/fossil.interface";

// Hook personalizado para seleccionar 3 fósiles aleatorios
export const useRandomFossils = (fossils: Fossil[]) => {
  return useMemo(() => {
    if (fossils.length < 3) return fossils; // Si hay menos de 3, devuelve todos

    const shuffled = [...fossils]; // Copia el array para no mutar el original
    const selected = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * shuffled.length);
      selected.push(shuffled.splice(randomIndex, 1)[0]); // Remueve y agrega el elemento
    }

    return selected;
  }, [fossils]); // Se recalcula solo si fossils cambia
};
