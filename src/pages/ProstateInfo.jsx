import React from "react";
import styled from "styled-components";
import ReviewBox from "../components/ReviewBox";
import ReviewForm from "../components/ReviewForm";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const ProstateInfo = () => {
  return (
    <DescriptionContainer>
      <Title>전립선 건강이란?</Title>
      <SubTitle>전립선이 하는 역할은 무엇일까요?</SubTitle>
      <Description>
        전립선은 방광 바로 밑에 요도가 시작되는 부분을 싸고 있는 기관입니다. 이것은 결합조직으로
        싸여있고 관모양의 많은 샘(우리 몸에 필요한 물질을 생산하는 조직)으로 이루어져 있습니다.
        전립선에서는 우유와 같은 연한 알칼리성액을 분비하며, 이 액은 정자에 의해 생산되는 산성액과
        질의 산성 분비를 중화시키는 작용도 가질 뿐 아니라 정자가 여성의 생식기까지 도달할 수 있도록
        하는데 도움을 줍니다. 전립선은 평활근 수축의 결과로 사정과 함께 그 분비액을 분비합니다.
        일반적으로 전립선은 사춘기 초반부터 발달하기 시작하여 몇 년 후에는 성인의 크기만큼
        성장합니다. 그 후 20대부터 50대까지는 크게 변화가 없으나 나이가 들어가면서 점차 비대해져
        전립선이 요도를 압박하여 배뇨를 방해할 수 있습니다. 75세 이상 남자의 70%가 발병하는
        질환입니다.
      </Description>
      <SubTitle>건강한 전립선을 유지하는 것이 왜 중요할까요?</SubTitle>
      <Description>
        남성은 나이가 들면서 전립선의 크기가 커지게 되는데 이를 가리켜 전립선 비대증이라고 합니다.
        전립선 비대증의 문제점은 전립선이 커지면서 요도가 압박되어 소변볼 때 문제가 생긴다는
        점입니다. 소변을 보고 싶지만 쉽게 나오지 않는 '배뇨지연', 소변줄기가 가늘어지는 '세뇨', 힘을
        줘야 소변이 나오는 '배뇨곤란', 소변보는 시간이 길어지는 '배뇨시간 연장', 소변을 다 봤는데
        아직 남아 있는 것 같은 '잔뇨감', 소변이 마려워서 배가 아플 지경인데도 소변을 볼 수가 없는
        '요폐색' 등이 여기에 해당합니다. 여기에 전립선이 방광을 자극해서 오는 증상도 있을 수 있는데
        화장실 가는 사이에 그냥 실례해 버리고 마는 '급뇨', 소변을 자주 보는 '빈뇨', 밤에 자다
        일어나서 소변을 보는 '야간뇨', 본인의 의지와는 상관없이 소변을 보게되는 '요실금' 등이
        방광자극에 따른 증상이라고 할 수 있습니다.
      </Description>
      <SubTitle>전립선 기능이 저하되는 원인은?</SubTitle>
      <Description>
        잦은 육식과 노령화에 따른 성호르몬의 부조화, 전립선 간질과 상피질간의 상호작용의 변화 등으로
        전립선 기능이 저하될 수 있습니다.
      </Description>
      <SubTitle>전립선 기능 개선을 위한 일상적인 방법은?</SubTitle>
      <Description>
        육류같이 지방분이 많은 음식은 되도록 줄이고, 탄수화물과 야채의 양을 늘리는 것이 좋습니다.
        술을 많이 마시면 갑자기 소변량이 늘어나 방광에 무리가 갈 수 있기 때문에 과음은 피해야
        합니다.
      </Description>
      <SubTitle>전립선과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?</SubTitle>
      <Description>
        <MiniTitle>전립선 건강의 유지에 도움을 줄 수 있습니다.</MiniTitle> 나이가 들면서 호르몬의
        변화(디하이드로테스토스테론의 증가) 등으로 전립선비대증이 발생하게 됩니다.
        쏘팔메토열매추출물은 테스토스테론(남성 호르몬)을 디하이드로테스토스테론으로 전환시키는
        효소(5-α-reductase)의 활성 저해로 전립선 비대증 증상 개선 효과를 나타냅니다.
      </Description>
      <SubTitle>전립선 건강에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요?</SubTitle>
      아래 기능성원료를 클릭하시면 기능성원료를 함유한 제품 정보를 확인하실 수 있습니다.
      <ReviewBox tag="prostate" />
      <ReviewForm tag="prostate" />
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

export default ProstateInfo;
