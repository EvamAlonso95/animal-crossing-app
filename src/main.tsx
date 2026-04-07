import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AnimalCrossingApp } from "./AnimalCrossingApp";
import { MusseumProvider } from "./collectionables/context/MusseumContext";

createRoot(document.getElementById("root")!).render(
  <MusseumProvider>
    <StrictMode>
      <AnimalCrossingApp />
    </StrictMode>
  </MusseumProvider>,
);
