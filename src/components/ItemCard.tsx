import { getAllFossilAction } from "@/collectionables/fossils/actions/get-fossil.action";
import { useQuery } from "@tanstack/react-query";

export const ItemCard = () => {
  const { data: fossils = [] } = useQuery({
    queryKey: ["fossils"],
    queryFn: () => getAllFossilAction("fossils"),
  });

  console.log(fossils);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {fossils.map((fossil) => (
          <div className="flex flex-col items-center justify-center cursor-pointer size-48 bg-indigo-300 text-white mb-1 rounded-3xl">
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
