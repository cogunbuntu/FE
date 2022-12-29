import React from "react";
import styled from "styled-components";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const JointBonInfo = () => {
  return (
    <DescriptionContainer>
      <Title>관절 뼈 건강이란?</Title>
      <SubTitle>관절/뼈 건강이란 무엇일까요?</SubTitle>
      <Description>
        관절은 두 개의 뼈가 연결된 부분으로 관절연골로 둘러싸여 있습니다. 또한 뼈는 칼슘과 인이
        석회화된 단단한 조직으로 몸을 지탱하고 보호하는 중요한 역할을 합니다. 관절연골이 손실되지
        않고 건강한 상태를 유지하여 관절을 부드럽게 움직이며, 정상적인 뼈의 분해와 재형성이 일어나는
        것을 건강한 관절/뼈라고 합니다.
      </Description>
      <SubTitle>관절/뼈 건강이 왜 중요할까요?</SubTitle> 체내 칼슘이 부족하거나 여러 가지 외부
      요인으로 인해 뼈의 분해와 재형성 균형이 깨지게 되면 골다공증, 골관절염 등 골 관련 질환이 생길
      수 있습니다. 따라서 관절/뼈 건강을 유지하는 것이 중요합니다.{" "}
      <SubTitle>관절/뼈 이상의 원인은 무엇일까요?</SubTitle>{" "}
      <Description>
        칼슘과 단백질의 부족, 폐경으로 인한 호르몬의 불균형, 과체중 또는 신체 활동량의 감소 등으로
        인해 관절/뼈에 이상이 올 수 있습니다. 스테로이드제의 과다복용, 잦은 가공식품 섭취 또는
        과도한 흡연 및 음주 등의 습관은 관절/뼈에 무리를 줄 수 있습니다.
      </Description>
      <SubTitle>관절/뼈 건강을 유지하기위한 일상적인 방법은 무엇일까요?</SubTitle>
      <Description>
        건강한 관절/뼈를 유지하기 위해서는 칼슘 및 비타민D가 풍부한 식품을 충분히 섭취해야 합니다.
        또한, 규칙적인 운동을 통하여 관절/뼈가 기능을 유지할 수 있도록 합니다.
      </Description>
      <SubTitle>관절/뼈 건강과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?</SubTitle>
      <MiniTitle>관절/뼈에 힐요한 구성성분을 공급하여 뼈 건강에 도움을 줄 수 있습니다.</MiniTitle>
      대두이소플라본을 원료로 하는 건강기능식품은 골 흡수 및 골 형성의 균형을 통해 뼈 기능을
      개선시킬 수 있습니다. 또한 뮤코다당 · 단백, 글루코사민, N-아세틸글루코사민을 원료로 하는
      건강기능식품은 연골의 구성성분 합성 증가 및 연골기질분해 억제 등을 통해 관절 및 연골 기능을
      개선시킬 수 있습니다. 한편, 초록입홍합추출오일복합물, 지방산복합물, 호프추출물 등을 원료로
      하는 건강기능식품은 관절에서 염증을 유발하는 원료의 생성 억제로 통증 감소 및 관절기능을
      개선시키는 데 도움을 줄 수 있습니다.
      <MiniTitle>염증반응에 영향을 주어 관절 건강에 도움을 줄 수 있습니다.</MiniTitle>
      초록입홍합추출오일복합물/유니베스틴케이황금 등 복합추출물 등을 원료로 하는 건강기능식품은
      관절에서 염증을 유발하는 물질 또는 이를 주로 생성하는 세포의 수를 감소시켜 관절건강에 도움을
      줄 수 있습니다.
      <SubTitle>관절/뼈 건강에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요?</SubTitle>
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

const MiniTitle = styled.div`
  font-size: 15px;
  margin-bottom: 7px;
  color: #424242;
  padding-top: 60px;
  font-weight: 600;
`;

export default JointBonInfo;
