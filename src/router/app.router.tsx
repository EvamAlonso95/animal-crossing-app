import { FossilPage } from "@/collectionables/fossils/page/FossilPage.Loable";
import { AnimalCrossingLayout } from "@/collectionables/layouts/AnimalCrossingLayout";
import { CollectionList } from "@/collectionables/pages/CollectionList";
import { HomePage } from "@/collectionables/pages/Home";
import { createBrowserRouter, Navigate } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AnimalCrossingLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: ":itemCategory", //Le ponemos el nombre a la variable que pasará por ahi
        element: <CollectionList />,
      },
      {
        path: ":itemCategory/:item", //Le ponemos el nombre a la variable que pasará por ahi
        element: <FossilPage />,
      },

      {
        path: "*",
        // element: <h2>Error 404</h2>
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
