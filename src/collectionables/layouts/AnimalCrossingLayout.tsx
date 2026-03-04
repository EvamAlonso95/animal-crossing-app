import { Outlet } from "react-router";

export const AnimalCrossingLayout = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-8xl justify-items-center font-acnh-title">
        Hola Mundo
      </h1>
      <Outlet />
    </div>
  );
};
