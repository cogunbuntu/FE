import QueryString from "qs";
import React from "react";
import { useLocation } from "react-router-dom";

const OauthPage = () => {
  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const code = query.code;

  return <div>{code}</div>;
};

export default OauthPage;
