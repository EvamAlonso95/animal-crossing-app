import { getAllFishesAction } from "@/collectionables/fishes/actions/get-all-fishess.action";
import { getAllFossilAction } from "@/collectionables/fossils/actions/get-all-fossils.action";
import { useAllCollectionables } from "@/collectionables/hooks/useAllCollectionables";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";
import { getAllBugsAction } from "@/collectionables/bugs/actions/get-all-bugs.action";
import { useGetTotalItems } from "@/collectionables/hooks/useGetTotalItems";
import { CustomFullScreenLoading } from "@/collectionables/components/Common/CustomFullScreenLoading";
import { useGetcategoryNameEsp } from "@/collectionables/hooks/useGetcategoryNameEsp";
import { CustomBreadCrums } from "@/collectionables/components/Custom/CustomBreadCrums";

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

  const totalItemsMap = useGetTotalItems();
  console.log({ totalItemsMap });

  const queryFn = actionMap[itemCategory] ?? (() => Promise.resolve([]));

  const { data: items = [], isLoading } = useAllCollectionables(
    itemCategory,
    queryFn,
  );

  const colors = categoryColors[itemCategory] ?? {
    outer: "bg-stone-100",
    inner: "bg-stone-50",
  };

  const categoryName = useGetcategoryNameEsp(itemCategory);

  const totalCount =
    itemCategory === "fossils"
      ? totalItemsMap.fossils
      : itemCategory === "fishes"
        ? totalItemsMap.fishes
        : itemCategory === "bugs"
          ? totalItemsMap.bugs
          : itemCategory === "sea"
            ? totalItemsMap.sea
            : 0;

  const handleClick = (itemName: string) => {
    navigate(`/${itemCategory}/${itemName}`);
  };

  if (isLoading) return <CustomFullScreenLoading />;
  return (
    <div className="w-[80%] flex justify-center flex-col mx-auto">
      <CustomBreadCrums categoryName={categoryName} totalCount={totalCount} />

      <div className="w-fit mx-auto flex flex-col">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
          <input
            type="text"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-card text-foreground font-body text-sm
            placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime-400/30 transition-shadow"
          />
        </div>
        <div className="gap-8 mb-8 flex flex-wrap justify-center">
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
        </div>
      </div>
    </div>
  );
};
