import { Link, useParams } from "react-router";
import { useRandomFossils } from "../hooks/useRandomFossils";
import { useAllFossils } from "../hooks/useAllFossils";
import { useFossilInfo } from "../hooks/useFossilInfo";
import { ArrowLeft } from "lucide-react";
import { useGetcategoryNameEsp } from "@/collectionables/hooks/useGetcategoryNameEsp";
// import { useFossilInfo } from "../hooks/useFossilInfo";

export const FossilPage = () => {
  const { itemCategory, fossilname } = useParams<{
    itemCategory: string;
    fossilname: string;
  }>();

  const displayCategory = useGetcategoryNameEsp(itemCategory ?? "");
  const { data: fossilData } = useFossilInfo(fossilname ?? "");
  const { data: fossils = [] } = useAllFossils();
  const randomFossils = useRandomFossils(fossils);

  console.log({ fossilData });

  return (
    <div className="max-w-4xl mx-auto h-screen py-6 md:py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          to={`/${itemCategory}`}
          className="p-2 rounded-lg  hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        {/* font-display text-2xl md:text-3xl font-black font-acnh-title */}
        <span className="font-display text-xl text-muted-foreground font-acnh-title">
          {displayCategory} /
        </span>
        <span className="font-display font-bold text-foreground capitalize">
          {fossilData?.name}
        </span>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Top Row: Image + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Left: Fossil Image & Action */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative group">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {fossilname}
                </h1>
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden shadow-inner">
                  <img
                    src={fossilData?.image_url}
                    alt={fossilData?.name}
                    className="w-full h-full object-contain opacity-95 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3.5 px-4 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                </svg>
                Añadir al museo
              </button>
            </div>

            {/* Right: Stats Cards */}
            <div className="lg:col-span-2 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Price */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100 shadow-sm">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-xl mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8.433 7.518c.655-.776 11-1.497 1.61-1.853a1 1 0 011.1 1.653A17.568 17.568 0 0014.758 9c.784 0 1.36.015 1.608.024a1 1 0 01.774 1.025v.105a1 1 0 01-1.053.993h-1.5a1 1 0 01-.988-.87l-.314-1.243a1 1 0 00-.951-.725H10.025a1 1 0 00-.951.725l-.314 1.243a1 1 0 01-.988.87H6.5a1 1 0 01-1.053-.993v-.105a1 1 0 01.774-1.025c.304-.009.96-.024 1.608-.024a17.568 17.568 0 003.324-1.853 1 1 0 011.1 1.653z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide font-medium">
                        Precio
                      </p>
                      <p className="font-bold text-xl text-gray-900">
                        {fossilData?.sell} Bayas
                      </p>
                    </div>
                  </div>
                </div>

                {/* Size */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100 shadow-sm">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-xl mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10.586 10.586l-2.121 2.121a1 1 0 001.414 1.414l2.829-2.829V7.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wide font-medium">
                        Tamaño
                      </p>
                      <p className="font-bold text-xl text-gray-900">
                        {fossilData?.width} × {fossilData?.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ADD */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100 shadow-sm">
                  <div className="flex items-center">
                    <div className="p-2 bg-indigo-100 rounded-xl mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 4.5 2.07 4.5 4.5 0 1.83-.875 3.18-2.188 3.878a4.5 4.5 0 001.778 1.441 4.5 4.5 0 01-2.553 7.739 4.5 4.5 0 002.226 1.085 4.5 4.5 0 01-2.226.085 4.5 4.5 0 002.006 1.688 4.5 4.5 0 1-2.675.073 4.5 4.5 0 001.749 1.077 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083 4.5 4.5 0 01-2.825.101 4.5 4.5 0 001.634 1.083z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-indigo-600 uppercase tracking-wide font-medium">
                        ADD
                      </p>
                      <p className="font-bold text-xl text-gray-900">
                        {fossilData?.hha_base}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Fossils Section */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Otros fósiles
                  </h3>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center group">
                    Otros fósiles
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Grid: 1 col (mobile), 2 (tablet), 3 (desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {randomFossils.map((fossil) => (
                    <div
                      key={fossil.name}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="relative pt-[100%] bg-gray-50">
                        <img
                          src={fossil.image_url}
                          alt={fossil.name}
                          className="absolute inset-0 w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform"
                        />

                        <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-xs font-medium text-gray-700">
                            Fósil
                          </span>
                        </div>
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
