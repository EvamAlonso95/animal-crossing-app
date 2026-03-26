import { CollectionCard } from "./CollectionCard";
import fossil from "../assets/img/Fossil_NH_Icon.png";
import fish from "../assets/img/Fish_NH_Icon.png";
import bug from "../assets/img/Bug_NH_Icon.png";
import mollusks from "../assets/img/Sea_Creature_NH_Icon.png";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

const cardsImg = [
  { id: 1, image: fossil, href: "/fossils" },
  { id: 2, image: fish, href: "/fishes" },
  { id: 3, image: bug, href: "/bugs" },
  { id: 4, image: mollusks, href: "/mollusks" },
];
export const CollectionGrid = () => {
  return (
    <div className=" py-8 md:py-12 flex justify-center items-center flex-col">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Leaf className="h-8 w-8 text-lime-600 animate-leaf-float" />
          <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">
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
      <div className="flex gap-3 mb-3">
        {cardsImg.map((card) => (
          <CollectionCard
            key={card.id}
            image={card.image}
            href={card.href}
          ></CollectionCard>
        ))}
      </div>
    </div>
  );
};
