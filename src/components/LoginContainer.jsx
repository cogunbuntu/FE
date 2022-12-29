import React, { useEffect } from "react";
import styled from "styled-components";
import { KakaoLogin } from "../assets/image";
import palette from "../lib/styles/palette";

const LoginContainer = () => {
  const initKakao = () => {
    const Kakao = window.Kakao;

    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    console.log(Kakao.isInitialized());
  };

  useEffect(() => {
    initKakao();
  }, []);

  return (
    <Inner>
      카카오로 3초만에 회원가입하기
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_KEY}&redirect_uri=http://localhost:3000/login/oauth&response_type=code`}
      >
        <img src={KakaoLogin} alt="카카오 로그인 링크" />
      </a>
    </Inner>
  );
};

const Inner = styled.div`
  background-color: ${palette.sky.lightest};
  width: 400px;
  height: 431px;
  margin: 0 auto;
  border: 1px solid ${palette.sky.base};
  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.363);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

export default LoginContainer;
