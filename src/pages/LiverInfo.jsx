import React from "react";
import styled from "styled-components";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const LiverInfo = () => {
  return (
    <DescriptionContainer>
      <Title>간 건강이란?</Title>
      <SubTitle>간이 하는 역할은 무엇일까요?</SubTitle>
      <Description>
        간은 우리 몸에서 가장 큰 장기로, 혈액을 통해 공급받은 영양분을 우리 몸에 필요한 물질로
        만들어 저장하며, 체내에서 생성된 여러 종류의 유해물질과 외부에서 들어온 약물, 음식,
        박테리아로부터 생성된 독소, 식품 첨가물과 같은 여러 화합물에 포함된 독성을 제거하는
        해독작용의 역할을 합니다. 즉 다양한 화학반응을 통해 이러한 독성물질을 유독성이 적은 물질로
        변화시키거나 배설하기 쉬운 수용성 물질로 만들어서 신체를 보호하게 됩니다. 간의 모세혈관에는
        쿠퍼 세포라는 특수 세포가 있어 이물질을 먹어 버리는 식세포 작용에 의해 혈액 속의 이물질을
        제거하고, 면역글로불린이나 면역체 형성 등에 관여합니다. 또한 간은 하루에 500~1,000㎖ 가량의
        담즙을 생성하는데, 담즙은 담관을 통하여 십이지장으로 분비되어 지방이 쉽게 소화, 흡수될 수
        있도록 지방을 유화시키는 작용을 합니다.간의 기능을 유지하는 것이 왜 중요할까요?
      </Description>
      <SubTitle>간의 기능을 유지하는 것이 왜 중요할까요?</SubTitle>
      <Description>
        간은 영양소를 가지고 몸에 필요한 여러 가지 물질을 만드는 대사작용, 해독작용, 면역작용,
        담즙형성과 같은 여러 가지 기능을 하는데, 간의 기능이 저하되면 이러한 기능들이 제대로
        이루어지지 않습니다. 간의 기능이 떨어지게 되면 간염, 간경화, 간성뇌증, 지방간, 알코올성 간
        질환 등과 같은 간 질환이 발생할 수 있습니다. 간은 간세포가 서서히 파괴되어 반 이상의 기능이
        저하되어도 특별한 증상이 나타나지 않아, 많이 나빠지지 않는 한 아무런 증상이 나타나지
        않습니다. 따라서 자신의 건강을 과신하여 지나친 음주 등으로 간을 혹사시키게 되면 간경변증,
        간암 등으로 진행될 수 있으므로 간의 기능을 유지하는 것이 중요합니다.
      </Description>
      <SubTitle>간 기능이 저하되는 원인은 무엇일까요?</SubTitle>
      <Description>
        간 기능 저하는 간염 바이러스와 과량의 알코올 섭취가 가장 일반적인 원인이 되며 그밖에도 약물,
        영양불량, 대사이상, 비만 등에 의해 일어날 수 있습니다.
      </Description>
      <SubTitle>간 건강을 유지하는 일상적인 방법은 무엇일까요?</SubTitle>
      <Description>
        우리의 간은 바람직하지 않은 식생활, 지나친 음주 및 비만 등의 요인으로 그 기능이 저하될 수
        있습니다. 따라서 간 기능을 개선하기 위해서는 바람직한 식생활을 통해 모든 음식을 골고루
        섭취하는 것이 중요하며, 간에 유익한 술은 없으므로 절제하는 음주 습관이 필요합니다. 또한
        적당한 운동은 건강한 간을 유지하는데 도움이 되는데, 무리한 운동으로 인한 급격한 체중 감소는
        오히려 심각한 지방간 및 지방간염 뿐 아니라 간 손상을 일으킬 수 있으므로 피해야 합니다.
      </Description>
      <SubTitle>간 개선과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?</SubTitle>
      <Description>
        <MiniTitle>간세포의 생존율을 증가시킵니다.</MiniTitle> 헛개나무 추출물, 표고버섯균사체
        추출물, 밀크씨슬(엉겅퀴 종류) 추출물은 간세포가 쉽게 파괴되지 않도록 생존율을 높이는데
        도움을 줍니다. <MiniTitle>단백질 합성을 증가시킵니다.</MiniTitle>{" "}
        <MiniTitle>
          간 성장세포의 섬유화를 억제시킵니다. 단백질 합성을 도와 간이 딱딱해지는 섬유화 현상을
          억제시키는 효과가 있습니다.
        </MiniTitle>
      </Description>
      <SubTitle>간 개선에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요?</SubTitle>
      아래 기능성원료를 클릭하시면 기능성원료를 함유한 제품 정보를 확인하실 수 있습니다.
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

export default LiverInfo;
