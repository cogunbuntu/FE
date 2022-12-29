import React from "react";
import styled from "styled-components";
import { Healthy } from "../assets/image";
import palette from "../lib/styles/palette";

const LandingContainer = () => {
  return (
    <Contents>
      <Title>건기식 백과사전</Title>
      <HumanImg src={Healthy} alt="" />
    </Contents>
  );
};

const Contents = styled.div`
  width: 640px;
  margin: 0 auto;
  border: 1px solid ${palette.sky.darker};
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const HumanImg = styled.img`
  height: 500px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-family: NeoDunggeunmo;
  font-size: 24px;
  padding: 20px;
`;

export default LandingContainer;
