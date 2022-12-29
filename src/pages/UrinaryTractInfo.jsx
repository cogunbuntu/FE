import React from "react";
import styled from "styled-components";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const UrinaryTractInfo = () => {
  return (
    <DescriptionContainer>
      <Title>요로건강이란?</Title>
      <SubTitle>요로 건강이란 무엇일까요?</SubTitle>
      <Description>
        {" "}
        요로계는 요를 생성하는 두 개의 신장, 일시적으로 요를 저장하는 방광, 요를 운반하는 두 개의
        요관, 체외로 요를 배출시키는 요도로 구성됩니다. 요로계의 중요한 기능 중의 하나는 우리 몸에서
        만들어진 노폐물을 포함한 각종 유해물질의 배설에 있으므로 요로계의 이상은 신체 내에
        유해물질의 축적과 전해질의 불균형 등을 초래할 수 있습니다. 따라서 요로건강을 유지하는 것은
        매우 중요합니다.{" "}
      </Description>
      <SubTitle>요로건강에 어떤 문제가 생길 수 있나요?</SubTitle>
      <Description>
        {" "}
        요로 상피세포에 E. coli 등의 병원균이 부착하여 요로감염을 일으킬 수 있습니다. 요로감염이
        걸리게 되면 신장의 손상이 발생하여 만성신우신염으로 이행될 수 있어 만성신부전 및 고혈압의
        원인이 될 수 있습니다. 따라서 요로건강의 유지가 무엇보다 중요합니다. 국내에서 요로감염(UTIs;
        Urinary Tract Infections)은 여성의 경우 남성보다 25~30배나 감염율이 높고 일생동안 여성의
        50%가 적어도 1번 이상은 걸리는 것으로 보고되고 있습니다. 그러나 대부분 요로감염의 치료 또는
        예방은 의약품에 의존하고 있는 실정이며 부작용이나 약물내성병원균 증가 가능성이 높다는
        측면에서 문제점이 대두되고 있습니다.{" "}
      </Description>{" "}
      <SubTitle>요로건강을 위한 일상적인 방법은 무엇일까요?</SubTitle>
      <Description>
        {" "}
        매일 3~5잔 정도의 물을 마시거나 비타민 C, 오렌지 주스를 섭취합니다. 대변을 본 후 앞에서
        뒤쪽으로 닦아냅니다. 변비를 개선시킵니다.{" "}
      </Description>
      <SubTitle>요로건강과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?</SubTitle>
      <Description>
        {" "}
        요로감염의 주된 원인균인 E. coli의 요로 상피에의 부착을 방지하고, E. coli의 소변 배출을
        촉진하여 박테리아들이 요로를 군락화 하는 것을 막는데 도움을 줄 수 있습니다.
      </Description>
    </DescriptionContainer>
  );
};

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 0px;
  box-sizing: border-box;
`;

const SubTitle = styled.div`
  font-size: 23px;
  color: #1d8800 !important;
  margin: 17px 0px;
`;

const Description = styled.div`
  font-size: 15px;
  color: #222;
  line-height: 30px;
`;

export default UrinaryTractInfo;
