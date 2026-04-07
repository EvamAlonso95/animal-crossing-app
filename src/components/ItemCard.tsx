import { getAllBugsAction } from "@/collectionables/bugs/actions/get-all-bugs.action";
import { getBugAction } from "@/collectionables/bugs/actions/get-bug.action";
import { getAllFishesAction } from "@/collectionables/fishes/actions/get-all-fishess.action";
import { getFishAction } from "@/collectionables/fishes/actions/get-fish.action";
import { getAllFossilAction } from "@/collectionables/fossils/actions/get-all-fossils.action";
import { getFossilAction } from "@/collectionables/fossils/actions/get-fossil.action";
import { getAllMollusksAction } from "@/collectionables/mollusks/action/get-all-mollusks.action";
import { getBugAction as getMolluskAction } from "@/collectionables/mollusks/action/get-mollusk.action";
import { useAllCollectionables } from "@/collectionables/hooks/useAllCollectionables";
import { useNavigate } from "react-router";

import { CustomFullScreenLoading } from "@/collectionables/components/Common/CustomFullScreenLoading";

interface Collectionable {
  name: string;
  image_url: string;
}

interface Props {
  itemCategory: string;
  searchQuery?: string;
}

const actionMap: Record<
  string,
  (searchQuery?: string) => Promise<Collectionable[]>
> = {
  fossils: getAllFossilAction,
  fishes: getAllFishesAction,
  bugs: getAllBugsAction,
  sea: getAllMollusksAction,
};

const singleActionMap: Partial<
  Record<string, (name: string) => Promise<Collectionable>>
> = {
  fossils: getFossilAction,
  fishes: getFishAction,
  bugs: getBugAction,
  sea: getMolluskAction,
};

const categoryColors: Record<string, { outer: string; inner: string }> = {
  fossils: { outer: "bg-pink-100", inner: "bg-pink-50" },
  fishes: { outer: "bg-cyan-100", inner: "bg-cyan-50" },
  bugs: { outer: "bg-amber-100", inner: "bg-amber-50" },
  sea: { outer: "bg-blue-100", inner: "bg-blue-50" },
};

export const ItemCard = ({ itemCategory, searchQuery = "" }: Props) => {
  const navigate = useNavigate();

  const action = actionMap[itemCategory] ?? (() => Promise.resolve([]));
  const singleAction = singleActionMap[itemCategory];

  const queryFn =
    singleAction && searchQuery
      ? () => singleAction(searchQuery).then((item) => [item])
      : () => action(searchQuery);

  const { data: items = [], isLoading } = useAllCollectionables(
    `${itemCategory}-${searchQuery}`,
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

  if (items.length === 0 && searchQuery) {
    return (
      <span className="text-muted-foreground font-body text-sm">
        No hay coincidencias para &quot;{searchQuery}&quot;
      </span>
    );
  }

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
          <p className="mt-1 font-acnh-title font-bold text-slate-700 capitalize">
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </p>
        </div>
      ))}
    </>
  );
};
