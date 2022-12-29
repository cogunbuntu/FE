import React from "react";
import styled from "styled-components";
import ReviewBox from "../components/ReviewBox";
import ReviewForm from "../components/ReviewForm";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const MouthInfo = () => {
  return (
    <DescriptionContainer>
      <Title>치아건강이란? </Title>
      <SubTitle> 치아건강이란 무엇일까요?</SubTitle>
      <Description>
        치아는 칼슘과 인에 의하여 딱딱하게 석회화 된 부분으로 섭취한 음식을 씹어 소화하기 쉽게
        만들고 침을 분비시켜 음식의 맛을 느끼게 해 주는 중요한 부분입니다. 따라서 치아 건강이란
        튼튼한 치아와 건강한 잇몸으로 씹는 기능과 발음의 기능을 원활히 하는 것을 의미합니다.{" "}
      </Description>
      <SubTitle> 건강한 치아를 유지하는 것이 왜 중요할까요?</SubTitle>
      <Description>
        치아의 저작(씹는 것)은 음식물을 소화하기 쉽도록 분쇄하고 소화액이 작용하는 표면적을 증가시켜
        위나 그 외의 소화기관의 기능을 돕는 역할을 합니다. 따라서 음식물을 잘 씹는 것은 소화의 측면
        외에도 음식에 대한 만족감을 증가시켜 식욕을 증진시킬 뿐 아니라 치은이나 구강점막을 자극하여
        림프와 혈액의 흐름을 촉진시킴으로써 대사의 항진과 구강건강 유지에 중요한 역할을 담당합니다.
        또한 치아의 이상, 치아질환 등은 미용의 측면에서 대인관계에 어려움을 주고 적극적인 사회생활에
        장애요소가 될 수 있습니다.
      </Description>
      <SubTitle> 치아질환의 원인은 무엇일까요?</SubTitle>
      <Description>
        충치 유발세균의 증식, 칼슘부족, 잘못된 양치질 습관, 건조한 구강환경 등은 치아질환의 원인이
        될 수 있습니다. 치아질환과 관련된 음식의 영향요인으로는 음식섭취횟수, 당질의 형태, 치아에
        대한 접착성, 음식섭취 순서, 음식에 함유된 무기질의 양 등이 있습니다. 대표적으로 설탕이 많이
        함유된 음식의 섭취는 치태 생성을 촉진합니다. 또한 접착성이 강한 캔디, 말린 과일 등은 치아
        표면에 부착하여 장기간 세균에 의한 산의 생성을 유발하여 치아질환을 일으킬 수 있으니 주의하는
        것이 좋습니다.
      </Description>
      <SubTitle> 치아건강을 위한 일상적인 방법은 무엇일까요? </SubTitle>
      <Description>
        음식의 성분, 간식 습관, 양치질 습관 등은 충치의 발생과 밀접한 관계가 있습니다. 특히 치아
        건강을 유지하려면 칼슘을 충분히 섭취하고, 설탕과 인스턴트 음식 섭취를 줄이는 것이 좋습니다.
        또한 섬유질 섭취를 늘려 침의 분비를 촉진하도록 하고, 음식 섭취 후 올바르게 양치질을 하여
        치아의 플라그를 없애 주는 것이 중요합니다.
      </Description>
      <SubTitle> 치아건강과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요? </SubTitle>
      <Description>
        <MiniTitle>
          치아에서 플라그 생성을 감소시키고 산(酸)의 생성을 어렵게 하여 충치발생을 감소시킬 수
          있습니다.
        </MiniTitle>
        충치균(s.mutans)은 설탕과 비슷한 당알콜을 설탕으로 착각하고 먹게 되는데, 당알콜은 충치균에
        의해 소화되지 않아, 치아 손상의 원인인 산(酸)을 만들어내지 못합니다. 충치균(s.mutans)은
        당알콜을 계속해서 먹게 되고, 이러한 과정에서 에너지를 다 소비하게 되면서 활동은 약해지게
        됩니다. 따라서 자일리톨 등이 함유된 건강기능식품은 충치균이 산을 만드는 것을 방해하여, 충치
        발생을 감소시킬 수 있습니다. 당알콜(sugar alcohol) : 천연에서 또는 인공적으로 만든
        감미성분으로 설탕에 비해 열량이 낮아 식품에 단맛을 내는 첨가물로 쓰임. 종류로는 자일리톨,
        만리톨, 소르비톨, 말티톨 등이 있음
        <MiniTitle>
          치아의 재석회화와 침의 분비를 촉진하여 치아 건강에 도움을 줄 수 있습니다.
        </MiniTitle>
        식을 섭취하면 치아 표면의 산도가 산성(PH 5.5이하)으로 떨어지게 됩니다. 이때 범랑질을
        구성하는 칼슘이 치아의 범랑질에서 떨어지기 시작합니다. 자일리톨 등을 함유한 건강기능식품은
        침의 분비를 촉진시켜, 침 속에 녹아있던 칼슘이 미세하게 부식이 일어났던 부분을, 다시 복원시킬
        수 있도록 도움을 줍니다. 또한 원활한 침의 분비는, 입안의 산을 희석시켜, 산성조건에서 활발한
        충치균의 성장도 감소시킬 수 있습니다. 재석회화: 치아의 석회화된 부분이 떨어졌다가 칼슘에
        의해 다시 단단하게 붙는 것을 의미
      </Description>
      <SubTitle>치아건강에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요?</SubTitle> 아래
      기능성원료를 클릭하시면 기능성원료를 함유한 제품 정보를 확인하실 수 있습니다.
      <ReviewBox tag="mouth" />
      <ReviewForm tag="mouth" />
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

export default MouthInfo;
