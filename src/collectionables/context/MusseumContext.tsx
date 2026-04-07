import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Collectionable } from "../types/collectionable.interface";

interface MusseumContextType {
  musseum: Collectionable[];
  musseumCount: number;
  isMusseum: (name: string) => boolean;
  toggleMusseum: (item: Collectionable) => void;
}

const MusseumContext = createContext<MusseumContextType | null>(null);

const getMusseumItemsFromLocalStorage = (): Collectionable[] => {
  const itemsMusseum = localStorage.getItem("itemsMusseum");
  return itemsMusseum ? JSON.parse(itemsMusseum) : [];
};

export function MusseumProvider({ children }: { children: React.ReactNode }) {
  const [musseum, setMusseum] = useState<Collectionable[]>(
    getMusseumItemsFromLocalStorage(),
  );

  const isMusseum = useCallback(
    (name: string) => musseum.some((item) => item.name === name),
    [musseum],
  );

  const toggleMusseum = useCallback((item: Collectionable) => {
    setMusseum((prev) =>
      prev.some((i) => i.name === item.name)
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item],
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("itemsMusseum", JSON.stringify(musseum));
  }, [musseum]);

  return (
    <MusseumContext.Provider
      value={{
        musseum,
        musseumCount: musseum.length,
        isMusseum,
        toggleMusseum,
      }}
    >
      {children}
    </MusseumContext.Provider>
  );
}

export function useMuseum(): MusseumContextType {
  const ctx = useContext(MusseumContext);
  if (!ctx) throw new Error("useMuseum must be used inside <MusseumProvider>");
  return ctx;
}
