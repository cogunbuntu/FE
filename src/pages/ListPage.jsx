import React from "react";
import styled from "styled-components";
import { Example } from "../assets/image";
import palette from "../lib/styles/palette";

const ListPage = () => {
  return (
    <>
      <Title>
        <StrongText>귀</StrongText>에 좋은 건강 기능 식품
      </Title>
      <ContentsBox>
        <Contents>
          <img src={Example} alt="예시 이미지" />
          <Description>
            <div>
              <p>제목</p>
              <p>가격</p>
            </div>
            <p>설명</p>
          </Description>
        </Contents>
        <Contents /> <Contents /> <Contents /> <Contents />
      </ContentsBox>
    </>
  );
};

export default ListPage;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const StrongText = styled.strong`
  font-weight: 600;
  color: ${palette.ink.base};
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const Contents = styled.div`
  background-color: ${palette.sky.lightest};
  width: 400px;
  height: 431px;
  margin: 0 auto;
  border: 1px solid ${palette.sky.base};
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.363);
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${palette.sky.light};
`;
