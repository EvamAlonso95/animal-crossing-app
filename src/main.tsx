import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AnimalCrossingApp } from "./AnimalCrossingApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimalCrossingApp />
  </StrictMode>,
);
