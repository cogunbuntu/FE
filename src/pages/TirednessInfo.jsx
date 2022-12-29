import React from "react";
import styled from "styled-components";
import ReviewBox from "../components/ReviewBox";
import ReviewForm from "../components/ReviewForm";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const TirednessInfo = () => {
  return (
    <DescriptionContainer>
      <Title>피로 개선이란?</Title>
      <SubTitle>피로란 무엇일까요?</SubTitle>
      <Description>
        피로는 여러 가지 원인에 의해서 신체적 혹은 정신적으로 지치거나 약해진 상태를 말하며 원인에
        관계없이 피로 증상이 6개월 이상 지속되거나 반복되는 경우를 만성피로라고 합니다. 흔히 피로를
        느낄 때에는 기운이 없고, 쉽게 지치며, 기력이 없어지고, 다른 일에 무관심해지는 증상이
        나타납니다.
      </Description>
      <SubTitle>피로 개선이 왜 중요할까요?</SubTitle>
      <Description>
        피로는 몸의 이상에 대한 일종의 경고 증상입니다. 이런 피로 증상을 무시하고 계속 마음이나 몸에
        무리를 가하면 저항력 감소, 질병악화, 집중장애, 망각, 활력감소, 판단력 저하, 짜증 등을 유발할
        수 있습니다. 따라서 피로가 느껴지면 왜 그런지 면밀하게 살펴서 몸에 더 이상의 해가 발생하지
        않도록 하여야 합니다.
      </Description>
      <SubTitle>피로의 원인은 무엇일까요?</SubTitle>
      <Description>
        암, 결핵, 당뇨병, 간질환, 갑상선기능항진증, 심부전증, 빈혈 등의 신체질환에 의해 피로를 느낄
        수 있습니다. 이 때 피로를 유발하는 원인을 치료하지 않으면 질병의 진행에 따라 피로감을 심하게
        느끼게 됩니다. 심한 스트레스, 우울증 및 불안증, 수면장애, 사회생활 부적응 등의 정신적 문제
        때문에 피로를 느낄 수 있으며, 직장이나 가정에서의 일이 불규칙하고 과중할 때 피로감은
        심해집니다. 여성들의 경우 육아나 가사노동으로 인해 만성피로를 느낄 수 있습니다.{" "}
      </Description>
      <SubTitle>피로회복을 위한 일상적인 방법은 무엇일까요?</SubTitle>
      <Description>
        탄수화물, 단백질, 비타민 등을 적절하게 섭취하도록 합니다. 가벼운 운동은 스트레스 해소에
        도움을 주므로 꾸준히 하는 것이 중요하며 평소 카페인이나 알코올 음료를 많이 마시는 것을
        피하고, 충분한 수면을 취해야 합니다. 목욕은 근육이완, 혈액순환 및 신진대사를 활발하게 하며
        부신 기능을 촉진시켜 피로회복에 도움을 줄 수 있습니다.
      </Description>
      <SubTitle>피로 개선과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요? </SubTitle>
      <Description>
        <MiniTitle>부신 세포의 카테콜아민 분비를 조절합니다.</MiniTitle>
        일반적으로 혈중 카테콜아민은 스트레스에 의해 증가되는데 인삼은 혈중 카테콜아민 농도를
        적당하게 조절함으로써 항스트레스 효과를 나타냅니다.
        <MiniTitle>심장보호 및 신경보호 작용을 나타냅니다.</MiniTitle>
        심장기능을 보호하고 라디칼에 의해서 유발되는 과산화와 신경세포내 과량의 칼슘 유입을
        막아줌으로써 신경보호 작용을 합니다. 이러한 심장보호 및 신경보호 작용에 의해 피로회복 효과가
        나타납니다.
        <MiniTitle>피로물질인 젖산농도를 감소시킵니다.</MiniTitle>
        연산은 인체에서 포도당이 에너지로 대사되는 과정에서 젖산의 생성을 억제하여 피로를 회복시키고
        정신을 안정시키며 칼슘의 체내 흡수율을 높입니다.
      </Description>
      <SubTitle>
        피로 개선에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요? 아래 기능성원료를 클릭하시면
        기능성원료를 함유한 제품 정보를 확인하실 수 있습니다.
      </SubTitle>
      <ReviewBox tag="tiredness" /> <ReviewForm tag="tiredness" />
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

export default TirednessInfo;
