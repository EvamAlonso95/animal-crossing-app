import { Outlet } from "react-router";
import { Footer } from "../components/Common/Footer";
import Header from "../components/Common/Header";

export const AnimalCrossingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
