import React from "react";
import styled from "styled-components";
import ReviewBox from "../components/ReviewBox";
import ReviewForm from "../components/ReviewForm";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const ImnnueInfo = () => {
  return (
    <DescriptionContainer>
      <Title>면역 기능이란?</Title>
      <SubTitle>면역 기능이란 무엇일까요?</SubTitle>
      <Description>
        면역기능은 감염 등으로부터 우리 몸을 보호하는 기능을 말합니다. 이는 몸에 원래 내재된 면역과
        적응에 의해 만들어진 면역 기능으로 나눌 수 있습니다.
      </Description>
      <SubTitle>면역 기능이 왜 중요할까요?</SubTitle>
      <Description>
        면역기능은 우리 몸에 유해한 외부 물질이나 비정상적으로 변형된 세포들을 인식하고 그것들을
        제거하는 기능을 의미합니다. 이렇게 함으로써 사람이 살아가는데 건강한 몸을 유지할 수 있도록
        도움을 줍니다.
      </Description>
      <SubTitle> 면역 기능 약화의 원인 무엇일까요?</SubTitle>
      <Description>
        환경오염물질 스트레스 인스턴트식품 포화지방산 함유 식품(튀긴 음식, 동물성 지방) 술과 담배
      </Description>
      <SubTitle>면역 기능 강화를 위한 일상적인 방법은 무엇일까요?</SubTitle>
      <Description>
        충분한 휴식을 취하며 숙면을 합니다. 특히 일찍 자고 일찍 일어나는 습관은 저항력을
        향상시키는데 도움이 됩니다. 하루 20분에서 30분가량의 일광욕을 합니다. 과식과 간식은
        금물하며, 카페인이 함유된 커피, 콜라나 담배, 술은 저항력을 약화시킬 수 있으니 피하도록
        합니다.
      </Description>
      <SubTitle>면역 기능과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요? </SubTitle>
      면역세포의 활성을 증가시킵니다. 건강한 면역 기능을 유지하기 위해서는 적절한 면역세포가 제
      역할을 원활히 수행해야 합니다. 인삼/홍삼 등을 함유한 건강기능식품은 필요한 면역세포를
      증가시키거나 그 기능을 조절하여 면역 능력에 도움을 줄 수 있습니다.
      <SubTitle>면역 기능에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요?</SubTitle>
      <ReviewBox tag="imnnue" />
      <ReviewForm tag="imnnues" />
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

export default ImnnueInfo;
