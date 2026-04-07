import { useState } from "react";
import { Link, useParams } from "react-router";
import { useRandomFossils } from "../hooks/useRandomFossils";
import { useAllFossils } from "../hooks/useAllFossils";
import { useFossilInfo } from "../hooks/useFossilInfo";
import { ArrowLeft, Coins, Grid2x2, Landmark, Origami } from "lucide-react";
import { useGetcategoryNameEsp } from "@/collectionables/hooks/useGetcategoryNameEsp";
import { CustomFullScreenLoading } from "@/collectionables/components/Common/CustomFullScreenLoading";
// import { useFossilInfo } from "../hooks/useFossilInfo";

export const FossilPage = () => {
  const { itemCategory, item: fossilName } = useParams<{
    itemCategory: string;
    item: string;
  }>();

  console.log(fossilName, "Fossil Page");

  const displayCategory = useGetcategoryNameEsp(itemCategory ?? "");
  const { data: itemData, isLoading } = useFossilInfo(fossilName ?? "");
  const { data: fossils = [] } = useAllFossils();
  const [seed, setSeed] = useState(0);
  const randomFossils = useRandomFossils(fossils, seed);

  const handleClickRefreshRandomFossils = () => {
    setSeed((prev) => prev + 1);
  };

  console.log({ itemData });

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
      
      {/* Main Card */}
      <div className="max-w-4xl mx-auto px-4 mt-6 font-acnh-title">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Top Row: Image + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Left: Fossil Image & Action */}
            <div className="lg:col-span-1 flex flex-col items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 mb-3 capitalize text-center">
                {fossilName}
              </h1>
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden shadow-inner bg-cover relative">
                {isLoading ? (
                  <CustomFullScreenLoading />
                ) : (
                  <img
                    src={itemData?.image_url}
                    alt={itemData?.name}
                    className="absolute inset-0 m-auto drop-shadow-xl object-contain max-w-none group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <button className=" cursor-pointer mt-6 w-full bg-lime-600 text-white font-bold text-xl py-3.5 px-4 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                <Landmark className="h-5 w-5 mr-2" fill="currentColor" />
                Añadir al museo
              </button>
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
    </div>
  );
};
