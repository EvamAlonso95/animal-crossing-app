import { getAllFishesAction } from "@/collectionables/fishes/actions/get-all-fishess.action";
import { getAllFossilAction } from "@/collectionables/fossils/actions/get-all-fossils.action";
import { useAllCollectionables } from "@/collectionables/hooks/useAllCollectionables";
import { useNavigate } from "react-router";

import { getAllBugsAction } from "@/collectionables/bugs/actions/get-all-bugs.action";

import { CustomFullScreenLoading } from "@/collectionables/components/Common/CustomFullScreenLoading";

// const ITEMS_PER_PAGE = 20;

interface Collectionable {
  name: string;
  image_url: string;
}

interface Props {
  itemCategory: string;
}

const actionMap: Record<string, () => Promise<Collectionable[]>> = {
  fossils: getAllFossilAction,
  fishes: getAllFishesAction,
  bugs: getAllBugsAction,
};

const categoryColors: Record<string, { outer: string; inner: string }> = {
  fossils: { outer: "bg-pink-100", inner: "bg-pink-50" },
  fishes: { outer: "bg-cyan-100", inner: "bg-cyan-50" },
  bugs: { outer: "bg-amber-100", inner: "bg-amber-50" },
  sea: { outer: "bg-blue-100", inner: "bg-blue-50" },
};

export const ItemCard = ({ itemCategory }: Props) => {
  const navigate = useNavigate();

  const queryFn = actionMap[itemCategory] ?? (() => Promise.resolve([]));

  const { data: items = [], isLoading } = useAllCollectionables(
    itemCategory,
    queryFn,
  );

  const colors = categoryColors[itemCategory] ?? {
    outer: "bg-stone-100",
    inner: "bg-stone-50",
  };

  const handleClick = (itemName: string) => {
    navigate(`/${itemCategory}/${itemName}`);
  };

  if (isLoading) return <CustomFullScreenLoading />;
  return (
    <>
      {items.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col items-center justify-center cursor-pointer size-52 ${colors.outer} mb-1 rounded-3xl`}
          onClick={() => handleClick(item.name)}
        >
          <img
            className={`w-3/4 h-3/4 object-contain ${colors.inner} rounded-2xl p-4 drop-shadow-sm hover:p-1 hover:transition-all`}
            src={item.image_url}
            alt={item.name}
          />
          <p className="mt-1 font-acnh-title font-bold text-slate-700">
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </p>
        </div>
      ))}
    </>
  );
};
