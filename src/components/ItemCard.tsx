import { useAllFossils } from "@/collectionables/hooks/useAllFossils";

import { useNavigate } from "react-router";

export const ItemCard = () => {
  const navigate = useNavigate();
  const { data: fossils = [] } = useAllFossils();

  console.log(fossils);

  const handleClick = (fossilname: string) => {
    navigate(`/item/${fossilname}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {fossils.map((fossil) => (
          <div
            className="flex flex-col items-center justify-center cursor-pointer size-48 bg-indigo-300 text-white mb-1 rounded-3xl"
            onClick={() => handleClick(fossil.name)}
          >
            <img
              className="w-3/4 h-3/4 object-contain bg-indigo-100 rounded-2xl p-4 hover:p-1 hover:transition-all "
              src={fossil.image_url}
              alt="fossil"
            />
            <p className="mt-1 font-acnh-text font-thin text-slate-700 ">
              {fossil.name.charAt(0).toUpperCase() + fossil.name.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
