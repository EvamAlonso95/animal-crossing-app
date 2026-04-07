import { useMuseum } from "../context/MusseumContext";
import { categoryBgClasses } from "../types/categories.interface";
import type { Category } from "../types/categories.interface";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { HousePlus } from "lucide-react";

export const MusseumPage = () => {
  const { musseum, toggleMusseum } = useMuseum();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 font-acnh-title">
      <div className="flex items-center gap-3 mb-8">
        <HousePlus className="h-7 w-7 text-lime-600" />
        <h1 className="text-3xl font-black">
          Mi <span className="text-lime-600">Museo</span>
        </h1>
        <span className="ml-2 text-sm text-muted-foreground">
          {musseum.length} {musseum.length === 1 ? "item" : "items"}
        </span>
      </div>

      {musseum.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-muted-foreground gap-4">
          <HousePlus className="h-16 w-16 opacity-20" />
          <p className="text-lg">Tu museo está vacío</p>
          <p className="text-sm">
            Visita fósiles, peces, insectos o moluscos y añade items al museo
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {musseum.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="relative group"
            >
              <Link to={`/${item.category}/${item.name}`}>
                <div
                  className={`${categoryBgClasses[item.category as Category]} rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                  <p className="text-sm font-semibold text-gray-900 capitalize text-center line-clamp-2">
                    {item.name}
                  </p>
                </div>
              </Link>
              <button
                onClick={() => toggleMusseum(item)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-red-400 hover:bg-red-500 text-white rounded-full p-1 transition-all"
                title="Quitar del museo"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
