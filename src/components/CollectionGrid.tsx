import { CollectionCard } from "./CollectionCard";
import fossil from "../assets/img/Fossil_NH_Icon.png";
import fish from "../assets/img/Fish_NH_Icon.png";
import bug from "../assets/img/Bug_NH_Icon.png";
import mollusks from "../assets/img/Sea_Creature_NH_Icon.png";

const cardsImg = [
  { id: 1, image: fossil, href: "/fossils" },
  { id: 2, image: fish, href: "/fishes" },
  { id: 3, image: bug, href: "/bugs" },
  { id: 4, image: mollusks, href: "/mollusks" },
];
export const CollectionGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {cardsImg.map((card) => (
        <CollectionCard key={card.id} image={card.image}></CollectionCard>
      ))}
    </div>
  );
};
