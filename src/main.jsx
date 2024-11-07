import React from "react";
import ReactDOM from "react-dom/client";

import "./style/flexboxgrid.min.css";
import "./style/index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./components/Sections/Error";
import PaymentPage from "./screens/Payment";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/payment",
    element: (
      <>
        <ToastContainer />
        <PaymentPage />
      </>
    ),
    errorElement: <NotFound />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
