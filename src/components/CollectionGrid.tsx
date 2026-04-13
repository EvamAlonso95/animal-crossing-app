import { CollectionCard } from "./CollectionCard";
import fossil from "../assets/img/Fossil_NH_Icon.png";
import fish from "../assets/img/Fish_NH_Icon.png";
import bug from "../assets/img/Bug_NH_Icon.png";
import mollusks from "../assets/img/Sea_Creature_NH_Icon.png";
import musseum from "../assets/img/musseum.png";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
import type { Category } from "@/collectionables/types/categories.interface";

import { useGetTotalItems } from "@/collectionables/hooks/useGetTotalItems";

const cardsImg: {
  id: number;
  image: string;
  href: string;
  category: Category;
}[] = [
  { id: 1, image: fossil, href: "/fossils", category: "fossils" },
  { id: 2, image: fish, href: "/fishes", category: "fishes" },
  { id: 3, image: bug, href: "/bugs", category: "bugs" },
  { id: 4, image: mollusks, href: "/sea", category: "sea" },
  { id: 5, image: musseum, href: "/musseum", category: "musseum" },
];

export const CollectionGrid = () => {
  const totalItemsMap = useGetTotalItems();

  return (
    <div className="font-acnh-title py-8 md:py-12 flex justify-center items-center flex-col min-h-[calc(100vh-8rem)]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 px-4"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Leaf className="h-8 w-8 text-lime-600 animate-leaf-float" />
          <h1 className=" text-3xl md:text-4xl font-black ">
            Museo de <span className="text-lime-600">Animal Crossing</span>
          </h1>
          <Leaf
            className="h-8 w-8 text-lime-600 animate-leaf-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <p className="text-muted-foreground font-body max-w-md mx-auto">
          Explora todas las colecciones del museo. Consulta peces, insectos,
          fósiles y criaturas marinas.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 w-full max-w-4xl">
        {cardsImg.map((card, index) => (
          <CollectionCard
            key={card.id}
            image={card.image}
            href={card.href}
            index={index}
            category={card.category}
            totalItems={totalItemsMap[card.category]}
          ></CollectionCard>
        ))}
      </div>
    </div>
  );
};
