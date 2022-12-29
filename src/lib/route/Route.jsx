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
  TriglyceridesInfo,
} from "../../pages";
import ListPage from "../../pages/ListPage";

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/info/immun", element: <ImmunInfo /> },
      { path: "/info/jointbon", element: <JointBonInfo /> },
      { path: "/info/liver", element: <LiverInfo /> },
      { path: "/info/mouth", element: <MouthInfo /> },
      { path: "/info/prostate", element: <ProstateInfo /> },
      { path: "/info/tiredness", element: <TirednessInfo /> },
      { path: "/info/urinarytractinfo", element: <UrinaryTractInfo /> },
      { path: "/info/triglyceridesInfo", element: <TriglyceridesInfo /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
