import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtGallery from "./pages/Art-Gallery";
import Commissions from "./pages/Commissions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/art-gallery/",
    element: <ArtGallery />,
  },
  {
    path: "/commissions/",
    element: <Commissions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
