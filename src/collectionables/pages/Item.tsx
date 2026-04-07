import { useState } from "react";
import { Link, useParams } from "react-router";

import {
  ArrowLeft,
  Coins,
  Grid2x2,
  Heart,
  HeartOff,
  HousePlus,
  Origami,
} from "lucide-react";
import {
  categoryBgClasses,
  type Category,
} from "@/collectionables/types/categories.interface";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetcategoryNameEsp } from "@/collectionables/hooks/useGetcategoryNameEsp";
import { CustomFullScreenLoading } from "@/collectionables/components/Common/CustomFullScreenLoading";
import { useFossilInfo } from "../fossils/hooks/useFossilInfo";
import { useAllFossils } from "../fossils/hooks/useAllFossils";
import { useRandomFossils } from "../fossils/hooks/useRandomFossils";
import { useGetCategory } from "../hooks/useGetCategory";
import { motion } from "framer-motion";
import { useMuseum } from "../context/MusseumContext";
import type { Collectionable } from "../types/collectionable.interface";

export const Item = () => {
  const { itemCategory, item: itemName } = useParams<{
    itemCategory: string;
    item: string;
  }>();

  useGetCategory(itemCategory ?? "", itemName ?? "");
  console.log("Item Page estoy en ", itemCategory, "/", itemName);

  const displayCategory = useGetcategoryNameEsp(itemCategory ?? "");
  const { data: itemData, isLoading } = useFossilInfo(itemName ?? "");
  const { data: fossils = [] } = useAllFossils();
  const [seed, setSeed] = useState(0);
  const randomFossils = useRandomFossils(fossils, seed);

  const handleClickRefreshRandomFossils = () => {
    setSeed((prev) => prev + 1);
  };

  console.log({ itemData });

  const { isMusseum, toggleMusseum } = useMuseum();

  const handleClickAddToMusseum = () => {
    if (!itemData) return;
    const collectionable: Collectionable = {
      name: itemData.name,
      url: itemData.url,
      image_url: itemData.image_url,
      category: "fossils",
    };
    toggleMusseum(collectionable);

    console.log("Añadido");
  };

  return (
    <div className="max-w-4xl mx-auto h-screen py-6 md:py-10">
      {/* TODO - Refactorizar */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          to={`/${itemCategory}`}
          className="p-2 rounded-lg  hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <span className=" text-xl text-muted-foreground font-acnh-title">
          {displayCategory} /
        </span>
        <span className="font-acnh-title font-bold text-foreground capitalize">
          {itemData?.name}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="text-center mb-10"
      >
        {/* Main Card */}
        <div className="max-w-4xl mx-auto px-4 mt-6 font-acnh-title">
          <div
            className={`${categoryBgClasses[itemCategory as Category]} rounded-3xl shadow-xl overflow-hidden border border-gray-100`}
          >
            {/* Top Row: Image + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Left: Fossil Image & Action */}
              <div className="lg:col-span-1 flex flex-col items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 mb-3 capitalize text-center">
                  {itemName}
                </h1>
                <div
                  className={`w-full h-full aspect-square rounded-2xl  flex items-center justify-center shadow-inner relative bg-gradient-to-br from-amber-50 to-amber-100`}
                >
                  {isLoading ? (
                    <CustomFullScreenLoading />
                  ) : (
                    <img
                      src={itemData?.image_url}
                      alt={itemData?.name}
                      className=""
                    />
                  )}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        className={`absolute bottom-3 right-3 cursor-pointer p-2.5 rounded-full shadow-lg transition-all transform ${isMusseum(itemName ?? "") ? "bg-red-400 hover:bg-red-500" : "bg-lime-600 hover:bg-lime-500 hover:shadow-xl hover:-translate-y-0.5"} text-white`}
                        onClick={() => handleClickAddToMusseum()}
                      >
                        {isMusseum(itemName ?? "") ? (
                          <HeartOff className="h-5 w-5" />
                        ) : (
                          <Heart className="h-5 w-5" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="text-white">
                      {isMusseum(itemName ?? "")
                        ? "Quitar del museo"
                        : "Añadir al museo"}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Right: Stats Cards */}
              <div className="lg:col-span-2 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Price */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100 shadow-sm">
                    <div className="flex justify-center items-center">
                      <div className="p-2 bg-green-100 rounded-xl mr-3">
                        <Coins className="h-5 w-5 text-green-700" />
                      </div>
                      <div>
                        <p className="text-xs text-green-600 uppercase tracking-wide font-medium">
                          Bayas
                        </p>
                        <p className="font-bold translate-x-1 text-gray-900">
                          {itemData?.sell}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100 shadow-sm">
                    <div className="flex justify-center items-center">
                      <div className="p-2 bg-blue-100 rounded-xl mr-3">
                        <Grid2x2
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-700"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-blue-600 uppercase tracking-wide font-medium">
                          Tamaño
                        </p>
                        <p className="font-bold translate-x-1 text-gray-900">
                          {itemData?.width} × {itemData?.length}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ADD */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100 shadow-sm">
                    <div className="flex justify-center items-center">
                      <div className="p-2 bg-indigo-100 rounded-xl mr-3">
                        <Origami
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-700"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-indigo-600 uppercase tracking-wide font-medium">
                          ADD
                        </p>
                        <p className="font-bold text-xl text-gray-900">
                          {itemData?.hha_base}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Fossils Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Otros <span className="lowercase">{displayCategory}</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {randomFossils.map((fossil) => (
                      <Link
                        to={`/${itemCategory}/${fossil.name}`}
                        className="block group"
                      >
                        <div
                          key={fossil.name}
                          className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group"
                          onClick={handleClickRefreshRandomFossils}
                        >
                          <div className="relative pt-[100%] bg-gray-50">
                            <img
                              src={fossil.image_url}
                              alt={fossil.name}
                              className="absolute inset-0 w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="p-4">
                            <p className="font-semibold text-gray-900 text-sm line-clamp-1">
                              {fossil.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {fossil.sell} Bayas
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
