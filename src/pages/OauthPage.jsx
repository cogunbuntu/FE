import axios from "axios";
import QueryString from "qs";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OauthPage = () => {
  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const code = query.code;

  useEffect(() => {
    const response = axios.get(`http://3.36.91.87/member/signup/kakao?code=${code}`);

    console.log(response);
  }, []);

  return <div>{code}</div>;
};

export default OauthPage;
