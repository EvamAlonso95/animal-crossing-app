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
      {fossils.map((fossil) => (
        <div className="flex items-center justify-center cursor-pointer size-48 bg-indigo-300 text-white mb-1 rounded-3xl">
          <img
            className="w-3/4 h-3/4 object-contain bg-indigo-100 rounded-2xl p-4 hover:p-1 hover:transition-all "
            src={fossil.image_url}
            alt="fossil"
          />
          <p>{fossil.name}</p>
        </div>
      ))}
    </>
  );
};
