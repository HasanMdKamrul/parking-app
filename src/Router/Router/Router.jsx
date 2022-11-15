import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Parking from "../../Pages/Parking/Parking/Parking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/parking",
        element: <Parking />,
      },
    ],
  },
]);

export default router;
