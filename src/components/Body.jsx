import React from "react";
import styled from "styled-components";
import { Humnan } from "../assets/image";
import palette from "../lib/styles/palette";

const Body = () => {
  return (
    <Contents>
      <HumanBody>
        <HumanHead />
        <HumanImg src={Humnan} alt="" />
      </HumanBody>
    </Contents>
  );
};

const Contents = styled.div`
  background-color: ${palette.sky.lightest};
  margin: 0 auto;
  border: 1px solid ${palette.sky.base};
  border-radius: 8px;
  margin-top: 20px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const HumanImg = styled.img`
  height: 800px;
`;

const HumanBody = styled.div`
  position: relative;
`;

const HumanHead = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100px;
  height: 150px;
  transform: translateX(-50%);
  border-radius: 50%;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default Body;
