import { getAllFishesAction } from "@/collectionables/fishes/actions/get-all-fishess.action";
import { getAllFossilAction } from "@/collectionables/fossils/actions/get-all-fossils.action";
import { useAllCollectionables } from "@/collectionables/hooks/useAllCollectionables";
import { useNavigate } from "react-router";

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
};

const categoryColors: Record<string, { outer: string; inner: string }> = {
  fossils: { outer: "bg-amber-100", inner: "bg-amber-50" },
  fishes: { outer: "bg-sky-100", inner: "bg-sky-50" },
  bugs: { outer: "bg-green-100", inner: "bg-green-50" },
  mollusks: { outer: "bg-rose-100", inner: "bg-rose-50" },
};

export const ItemCard = ({ itemCategory }: Props) => {
  const navigate = useNavigate();

  const queryFn = actionMap[itemCategory] ?? (() => Promise.resolve([]));

  const { data: items = [] } = useAllCollectionables(itemCategory, queryFn);

  const colors = categoryColors[itemCategory] ?? {
    outer: "bg-stone-100",
    inner: "bg-stone-50",
  };

  const handleClick = (itemName: string) => {
    navigate(`/item/${itemName}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col items-center justify-center cursor-pointer size-48 ${colors.outer} mb-1 rounded-3xl`}
            onClick={() => handleClick(item.name)}
          >
            <img
              className={`w-3/4 h-3/4 object-contain ${colors.inner} rounded-2xl p-4 hover:p-1 hover:transition-all`}
              src={item.image_url}
              alt={item.name}
            />
            <p className="mt-1 font-acnh-text font-thin text-slate-700">
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
