import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { CustomSeach } from "../Common/CustomSeach";

export const CustomBreadCrums = () => {
  return (
    <div className="flex justify-between items-center gap-3 mt-6 mb-6">
      <div className="flex">
        <Link
          to="/"
          className="p-2 rounded-lg  hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 " />
        </Link>
        <h1 className="text-xl text-muted-foreground font-acnh-titlee">Home</h1>
      </div>
      <div className="relative w-full">
        <CustomSeach />
      </div>
    </div>
  );
};
