import { Link, useParams } from "react-router";
// import { useRandomFossils } from "../hooks/useRandomFossils";
// import { useAllFossils } from "../hooks/useAllFossils";
import { useFossilInfo } from "../hooks/useFossilInfo";
import type {
  categoryLabels,
  Category,
} from "@/collectionables/types/categories.interface";
import { ItemCard } from "@/components/ItemCard";
import { motion } from "framer-motion";
import { ArrowLeft, Coins, Droplets, InfoIcon, Ruler } from "lucide-react";
// import { useFossilInfo } from "../hooks/useFossilInfo";

export const FossilPage = () => {
  const { fossilname } = useParams<{ fossilname: string }>();

  const { data: fossilData } = useFossilInfo(fossilname ?? "");
  // const { data: fossils = [] } = useAllFossils();
  // const randomFossils = useRandomFossils(fossils);

  console.log({ fossilData });

  return (
    <div className="container py-6 md:py-10">
      {/* <div className="flex items-center gap-3 mb-6">
        <Link
          to={`/${category}`}
          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <span className="text-sm text-muted-foreground font-body">
          {categoryLabels[category as Category]} /
        </span>
        <span className="font-display font-bold text-foreground capitalize">
          {itemName}
        </span>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-6 md:gap-10"
      >
        {/* Image */}
        <div className="w-full md:w-80 shrink-0">
          <div className="aspect-square rounded-2xl bg-card border shadow-card flex items-center justify-center p-8">
            <img
              src={item.image_uri || item.icon_uri}
              alt={itemName}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-5">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-black text-foreground capitalize mb-2">
              {itemName}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-display font-bold bg-secondary/30 text-secondary-foreground">
                {/* {categoryLabels[category as Category]} */}
              </span>
              {/* <RarityBadge rarity={rarity} /> */}
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-wrap gap-4">
            <InfoIcon
              icon={<Coins className="h-4 w-4 text-ac-yellow" />}
              label="Precio"
              value={`${item.price.toLocaleString()} Bells`}
            />
            {item["price-cj"] && (
              <InfoIcon
                icon={<Coins className="h-4 w-4 text-ac-coral" />}
                label="Precio CJ"
                value={`${item["price-cj"].toLocaleString()} Bells`}
              />
            )}
            {item["price-flick"] && (
              <InfoChip
                icon={<Coins className="h-4 w-4 text-ac-coral" />}
                label="Precio Flick"
                value={`${item["price-flick"].toLocaleString()} Bells`}
              />
            )}
          </div>

          {/* Fish/Bug specifics */}
          {isFishOrBug && item.availability && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {item.availability.location && (
                  <InfoChip
                    icon={<Droplets className="h-4 w-4 text-ac-blue" />}
                    label="Ubicación"
                    value={item.availability.location}
                  />
                )}
                {item.shadow && (
                  <InfoChip
                    icon={<Ruler className="h-4 w-4 text-ac-brown-light" />}
                    label="Sombra"
                    value={item.shadow}
                  />
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MonthGrid
                  activeMonths={item.availability["month-array-northern"] || []}
                  label="🌍 Hemisferio Norte"
                />
                <MonthGrid
                  activeMonths={item.availability["month-array-southern"] || []}
                  label="🌏 Hemisferio Sur"
                />
              </div>
            </div>
          )}

          {/* Fossil specifics */}
          {category === "fossils" && (
            <div className="flex flex-wrap gap-4">
              {item["part-of"] && (
                <InfoChip
                  icon={<span className="text-sm">🦴</span>}
                  label="Grupo"
                  value={item["part-of"]}
                />
              )}
              {item["hha-base"] !== undefined && (
                <InfoChip
                  icon={<span className="text-sm">⭐</span>}
                  label="HHA"
                  value={String(item["hha-base"])}
                />
              )}
            </div>
          )}

          {/* Colors */}
          {(item["color-1"] || item["color-2"]) && (
            <div>
              <p className="text-xs font-display font-bold text-muted-foreground mb-2">
                Colores
              </p>
              <div className="flex gap-2">
                {[item["color-1"], item["color-2"]].filter(Boolean).map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full text-xs font-body bg-muted text-foreground capitalize"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Catch phrase */}
          {item["catch-phrase"] && (
            <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground text-sm font-body">
              &ldquo;{item["catch-phrase"]}&rdquo;
            </blockquote>
          )}

          {/* Museum phrase */}
          {item["museum-phrase"] && (
            <div>
              <p className="text-xs font-display font-bold text-muted-foreground mb-1">
                Descripción del museo
              </p>
              <p className="text-sm text-foreground/80 font-body leading-relaxed">
                {item["museum-phrase"]}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Related */}
      {related.length > 0 && (
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
      )}
    </div>
  );
};
