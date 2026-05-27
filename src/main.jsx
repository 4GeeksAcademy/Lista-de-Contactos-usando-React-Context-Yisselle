import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { StoreProvider } from "./hooks/useGlobalReducer";
import AppRoutes from "./routes";


// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  </React.StrictMode>
);
