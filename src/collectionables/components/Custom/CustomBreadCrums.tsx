import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { CustomSeach } from "../Common/CustomSeach";

export interface Props {
  categoryName: string;
  totalCount?: number;
}

export const CustomBreadCrums = ({ categoryName }: Props) => {
  return (
    <div className="flex justify-between items-center gap-3 mt-6 mb-6">
      <Link
        to="/"
        className="p-2  flex flex-row items-center gap-2 rounded-lg   transition-colors"
      >
        <ArrowLeft className="h-4 w-4 " />
        <h1 className="font-display text-2xl md:text-3xl font-black font-acnh-title">
          {categoryName}
        </h1>
      </Link>
      <div className="relative mb-6">
        <CustomSeach />
      </div>
    </div>
  );
};
