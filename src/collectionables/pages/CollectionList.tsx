import { motion } from "framer-motion";
import { ItemCard } from "@/components/ItemCard";
import { useParams, useSearchParams } from "react-router";
import { CustomBreadCrums } from "../components/Custom/CustomBreadCrums";

export const CollectionList = () => {
  const { itemCategory } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";

  return (
    <div>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <CustomBreadCrums />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
              <ItemCard
                itemCategory={itemCategory ?? ""}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
