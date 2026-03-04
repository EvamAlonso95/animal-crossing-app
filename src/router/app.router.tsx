import { AnimalCrossingLayout } from "@/collectionables/layouts/AnimalCrossingLayout";
import { CollectionList } from "@/collectionables/pages/CollectionList";
import { HomePage } from "@/collectionables/pages/Home";
import { ItemDetail } from "@/collectionables/pages/ItemDetail";
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
        path: "item-list/:itemName", //Le ponemos el nombre a la variable que pasará por ahi
        element: <CollectionList />,
      },
      {
        path: "item/:id", //Le ponemos el nombre a la variable que pasará por ahi
        element: <ItemDetail />,
      },

      {
        path: "*",
        // element: <h2>Error 404</h2>
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
