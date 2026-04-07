import { AnimalCrossingLayout } from "@/collectionables/layouts/AnimalCrossingLayout";
import { CollectionList } from "@/collectionables/pages/CollectionList";
import { HomePage } from "@/collectionables/pages/Home";
import { MusseumPage } from "@/collectionables/pages/MusseumPage";
import { createBrowserRouter, Navigate } from "react-router";
import { Item } from "@/collectionables/pages/Item";

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
        path: "musseum",
        element: <MusseumPage />,
      },
      {
        path: ":itemCategory",
        element: <CollectionList />,
      },
      {
        path: ":itemCategory/:item",
        element: <Item />,
      },

      {
        path: "*",
        // element: <h2>Error 404</h2>
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
