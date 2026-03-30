import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export interface Props {
  categoryName: string;
  totalCount?: number;
}

export const CustomBreadCrums = ({ categoryName, totalCount = 0 }: Props) => {
  return (
    <div className="flex items-center gap-3 mt-6 mb-6">
      <Link
        to="/"
        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 " />
      </Link>
      <h1 className="font-display text-2xl md:text-3xl font-black font-acnh-title">
        {categoryName}
      </h1>
      {totalCount && (
        <span className="ml-auto text-sm text-muted-foreground font-body">
          {totalCount} resultados
        </span>
      )}
    </div>
  );
};
