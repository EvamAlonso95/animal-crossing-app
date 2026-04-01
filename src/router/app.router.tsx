import { ItemDetailRouter } from "@/router/ItemDetailRouter";
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
        path: ":itemCategory",
        element: <CollectionList />,
      },
      {
        path: ":itemCategory/:item",
        element: <ItemDetailRouter />,
      },

      {
        path: "*",
        // element: <h2>Error 404</h2>
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
