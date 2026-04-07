import {
  categoryBgClasses,
  categoryLabels,
  type Category,
} from "@/collectionables/types/categories.interface";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export interface CardProps {
  image: string;
  href: string;
  index: number;
  category: Category;
  totalItems: number;
}

export const CollectionCard = ({
  image,
  href,
  index,
  category,
  totalItems,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="h-full"
    >
      <Link to={href} className="block group">
        <div
          className={`relative overflow-hidden rounded-2xl border-none p-6 transition-all duration-300 h-full
            shadow-card hover:shadow-card-hover hover:-translate-y-1 ${categoryBgClasses[category]?.outer}`}
        >
          <img
            className="drop-shadow-xl w-36 h-36 object-contain"
            src={image}
          />

          <h2 className=" text-xl font-bold text-zinc-900 font-acnh-text: mb-1">
            {categoryLabels[category]}
          </h2>
          <p className="text-sm text-muted-foreground font-body">
            {totalItems ?? 0} elementos
          </p>
          <ArrowRight className="absolute bottom-5 right-5 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
};
