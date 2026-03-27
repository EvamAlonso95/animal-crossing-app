import { getAllFishesAction } from "@/collectionables/fishes/actions/get-all-fishess.action";
import { getAllFossilAction } from "@/collectionables/fossils/actions/get-all-fossils.action";
import { useAllCollectionables } from "@/collectionables/hooks/useAllCollectionables";
import { Link, useNavigate } from "react-router";

import { ArrowLeft, Search } from "lucide-react";
import { getAllBugsAction } from "@/collectionables/bugs/actions/get-all-bugs.action";

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

  const { data: items = [] } = useAllCollectionables(itemCategory, queryFn);

  const colors = categoryColors[itemCategory] ?? {
    outer: "bg-stone-100",
    inner: "bg-stone-50",
  };

  const handleClick = (itemName: string) => {
    navigate(`/item/${itemName}`);
  };

  return (
    <div className="w-[80%] flex justify-center flex-col mx-auto">
      <div className="flex items-center gap-3 mt-6 mb-6">
        <Link
          to="/"
          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 " />
        </Link>
        <h1 className="font-display text-2xl md:text-3xl font-black font-acnh-title">
          {itemCategory === "fossils"
            ? (itemCategory = "Fósiles")
            : itemCategory === "fishes"
              ? (itemCategory = "Peces")
              : itemCategory === "bugs"
                ? (itemCategory = "Bichos")
                : "Moluscos"}
        </h1>
        <span className="ml-auto text-sm text-muted-foreground font-body">
          {0} resultados
        </span>
      </div>

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
