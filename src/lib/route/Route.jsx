import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root, LandingPage } from "../../pages";
// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
