import { useMuseum } from "../context/MusseumContext";
import { categoryBgClasses } from "../types/categories.interface";
import type { Category } from "../types/categories.interface";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { HousePlus } from "lucide-react";
import { CustomBreadCrums } from "../components/Custom/CustomBreadCrums";

export const MusseumPage = () => {
  const { musseum, toggleMusseum } = useMuseum();

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <CustomBreadCrums />
      <div className="w-full">
        {musseum.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-muted-foreground gap-4">
            <HousePlus className="h-16 w-16 opacity-20" />
            <p className="text-lg">Tu museo está vacío</p>
            <p className="text-sm">
              Visita fósiles, peces, insectos o moluscos y añade items al museo
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
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
                    className={`${categoryBgClasses[item.category as Category]?.outer} flex flex-col items-center justify-center cursor-pointer w-full aspect-square mb-1 rounded-3xl`}
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className={`w-3/4 h-3/4 object-contain ${categoryBgClasses[item.category as Category]?.inner} rounded-2xl p-4 drop-shadow-sm hover:p-1 hover:transition-all`}
                    />
                    <p className="mt-1 font-acnh-title font-bold text-slate-700 capitalize">
                      {item.name}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => toggleMusseum(item)}
                  className="absolute top-2 right-2 opacity-0 cursor-pointer size-7 flex items-center justify-center rounded-full shadow-lg group-hover:opacity-100 bg-red-400 hover:bg-red-500 text-white transition-all"
                  title="Quitar del museo"
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
