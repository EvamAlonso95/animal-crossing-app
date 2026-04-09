import { useGetcategoryNameEsp } from "@/collectionables/hooks/useGetcategoryNameEsp";
import { Link, useParams } from "react-router";
import { useFishInfo } from "../hook/useFishInfo";
import { useAllFishes } from "../hook/useAllFishes";
import { ArrowLeft, CalendarDays, Coins, Info } from "lucide-react";
import { motion } from "framer-motion";

export const FishesPage = () => {
  const { itemCategory, item: fishName } = useParams<{
    itemCategory: string;
    item: string;
  }>();

  const displayCategory = useGetcategoryNameEsp(itemCategory ?? "");
  const { data: fishData, isLoading } = useFishInfo(fishName ?? "");
  const { data: fishes = [] } = useAllFishes();
  //   const [seed, setSeed] = useState(0);
  //   const randomfishes = useRandomfishes(fishes, seed);

  //   const handleClickRefreshRandomfishes = () => {
  //     setSeed((prev) => prev + 1);
  //   };

  return (
    <div className="container py-6 md:py-10">
      <div className="flex items-center gap-3 mb-6">
        <Link
          to={`/item-list/${displayCategory}`}
          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <span className="text-sm text-muted-foreground font-body">
          {displayCategory} /
        </span>
        <span className="font-display font-bold text-foreground capitalize">
          {fishName}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-6 md:gap-10"
      >
        {/* Image */}
        <div className="w-full md:w-80 shrink-0">
          <div className="aspect-square rounded-2xl bg-card border shadow-card flex items-center justify-center p-8">
            <img
              src={fishData?.image_url}
              alt={fishName}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-5">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-black text-foreground capitalize mb-2">
              {fishName}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-display font-bold bg-secondary/30 text-secondary-foreground">
                {displayCategory}
              </span>
              {/* <RarityBadge rarity={rarity} /> */}
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-wrap gap-4">
            <Info
              //   icon={<Coins className="h-4 w-4 text-ac-yellow" />}
              label="Precio"
              value={`${fishData?.sell_nook.toLocaleString()} Bells`}
            />
            {fishData?.sell_cj && (
              <Info
                // icon={<Coins className="h-4 w-4 text-ac-coral" />}
                label="Precio CJ"
                value={`${fishData?.sell_cj.toLocaleString()} Bells`}
              />
            )}
          </div>

          {/* Fish/Bug specifics */}
          {fishData?.location && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {fishData.location && (
                  <Info
                    // icon={<Droplets className="h-4 w-4 text-ac-blue" />}
                    label="Ubicación"
                    value={fishData.location}
                  />
                )}
                {/* {fishData.render_url && (
                  <Info
                    // icon={<Ruler className="h-4 w-4 text-ac-brown-light" />}
                    // label="Sombra"
                    value={fishData.render_url}
                  />
                )} */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CalendarDays
                  activeMonths={fishData.north.months_array || []}
                  label="🌍 Hemisferio Norte"
                />
                <CalendarDays
                  activeMonths={fishData.south.months_array || []}
                  label="🌏 Hemisferio Sur"
                />
              </div>
            </div>
          )}

          {/* Catch phrase */}
          {fishData?.catchphrases && (
            <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground text-sm font-body">
              &ldquo;{fishData?.catchphrases}&rdquo;
            </blockquote>
          )}

          {/* Museum phrase */}
          {fishData?.catchphrases && (
            <div>
              <p className="text-xs font-display font-bold text-muted-foreground mb-1">
                Descripción del museo
              </p>
              <p className="text-sm text-foreground/80 font-body leading-relaxed">
                {fishData?.catchphrases}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Related */}
      {/* {related.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display text-lg font-black text-foreground mb-4">
            🍃 Relacionados
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {related.map((r, i) => (
              <ItemCard
                key={r["file-name"]}
                item={r}
                category={category as Category}
                index={i}
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};
