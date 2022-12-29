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
      { path: "/immun", element: <ImmunInfo /> },
      { path: "/jointbon", element: <JointBonInfo /> },
      { path: "/liver", element: <LiverInfo /> },
      { path: "/mouth", element: <MouthInfo /> },
      { path: "/prostate", element: <ProstateInfo /> },
      { path: "/tiredness", element: <TirednessInfo /> },
      { path: "/urinarytractinfo", element: <UrinaryTractInfo /> },
      { path: "/triglyceridesInfo", element: <TriglyceridesInfo /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
]);
