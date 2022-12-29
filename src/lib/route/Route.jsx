import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root, LandingPage, LoginPage } from "../../pages";
import ListPage from "../../pages/ListPage";
import OauthPage from "../../pages/OauthPage";
// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/login/oauth", element: <OauthPage /> },
      { path: "/list", element: <ListPage /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
