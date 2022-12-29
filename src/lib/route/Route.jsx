import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root, LandingPage, LoginPage } from "../../pages";
import ListPage from "../../pages/ListPage";
import LiverInfo from "../../pages/LiverInfo";
import MouthInfo from "../../pages/MouthInfo";
import OauthPage from "../../pages/OauthPage";
import ProstateInfo from "../../pages/ProstateInfo";
import TirednessInfo from "../../pages/TirednessInfo";
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
      { path: "/info/mouse", element: <MouthInfo /> },
      { path: "/info/tiredness", element: <TirednessInfo /> },
      { path: "/info/liver", element: <LiverInfo /> },
      { path: "/info/prostate", element: <ProstateInfo /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
