import React from "react";
import styled from "styled-components";
import { Example } from "../assets/image";
import palette from "../lib/styles/palette";

const DetailPage = () => {
  return (
    <Contents>
      <ItemBox>
        <ItemImg src={Example} />
        <DescriptionBox>
          <Title>루테인</Title>
          <div>카로티노이드 중에서도 잔토필(xanthophylls)의 한 종류.</div>
          <div>각종 정보</div>
        </DescriptionBox>
      </ItemBox>
      <ReviewList>
        <ReviewBox>
          <ReviewImg src={Example} />
          <p>루테인</p>
        </ReviewBox>
        <ReviewBox>
          <ReviewImg src={Example} />
          <p>루테인</p>
        </ReviewBox>
        <ReviewBox>
          <ReviewImg src={Example} />
          <p>루테인</p>
        </ReviewBox>
        <ReviewBox>
          <ReviewImg src={Example} />
          <p>루테인</p>
        </ReviewBox>
        <ReviewBox>
          <ReviewImg src={Example} />
          <p>루테인</p>
        </ReviewBox>
      </ReviewList>
    </Contents>
  );
};

const Contents = styled.div`
  background-color: ${palette.sky.lightest};
  width: 1040px;
  height: 860px;
  margin: 0 auto;
  border: 1px solid ${palette.sky.base};
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.363);
  padding: 20px;
`;

const ItemImg = styled.img`
  width: 605px;
  height: 460px;
`;

const ItemBox = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${palette.sky.base};
`;

const DescriptionBox = styled.div`
  width: 100%;
  padding: 12px;
  align-items: center;
  font-weight: 500;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const ReviewList = styled.div`
  width: auto;
  display: flex;
  overflow-x: scroll;
  gap: 22px;
  padding-top: 20px;
  text-align: center;
`;

const ReviewImg = styled.img`
  width: 337px;
  height: 236px;
  padding: 4px;
`;

const ReviewBox = styled.div`
  width: 337px;
`;

export default DetailPage;
