import { Outlet } from "react-router";
import { Footer } from "../components/Common/Footer";
import Header from "../components/Common/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

export const AnimalCrossingLayout = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </TooltipProvider>
  );
};
