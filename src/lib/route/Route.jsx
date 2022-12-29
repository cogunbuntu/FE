import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root, LandingPage, LoginPage } from "../../pages";
import DetailPage from "../../pages/DetailPage";
import ListPage from "../../pages/ListPage";
import MouthInfo from "../../pages/MouthInfo";
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
      { path: "/detail/:id", element: <DetailPage /> },
      { path: "/info/mouse", element: <MouthInfo /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
