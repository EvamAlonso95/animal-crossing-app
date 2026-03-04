import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const AnimalCrossingApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
