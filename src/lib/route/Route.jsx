import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Root,
  LandingPage,
  LoginPage,
  MouthInfo,
  TirednessInfo,
  LiverInfo,
  ProstateInfo,
  UrinaryTractInfo,
  JointBonInfo,
  ImmunInfo,
} from "../../pages";
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
      { path: "/info/immun", element: <ImmunInfo /> },
      { path: "/info/jointbon", element: <JointBonInfo /> },
      { path: "/info/liver", element: <LiverInfo /> },
      { path: "/info/mouse", element: <MouthInfo /> },
      { path: "/info/prostate", element: <ProstateInfo /> },
      { path: "/info/tiredness", element: <TirednessInfo /> },
      { path: "/info/urinarytractinfo", element: <UrinaryTractInfo /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
