import React from "react";
import styled from "styled-components";
import ReviewBox from "../components/ReviewBox";
import ReviewForm from "../components/ReviewForm";
import { DescriptionContainer } from "../lib/styles/commonStyles";

const TriglyceridesInfo = () => {
  return (
    <DescriptionContainer>
      <Title>혈중 중성지방 개선이란?</Title>
      <SubTitle>혈중 중성지방이란 무엇일까요?</SubTitle>
      <Description>
        혈중 중성지방은 식사로부터 들어오는 지방이나 간에서 합성되는 지방이 혈액 속에 있는 형태로,
        혈중 지방 중 가장 많은 비중을 차지합니다. 정상수준의 중성지방 농도는 150㎎/㎗ 이하이며,
        200~399㎎/㎗ 이면 경계수준, 400㎎/㎗ 이상이면 고위험군으로 인체에 나쁜 영향을 미칠 수
        있으므로 주의해야 합니다.
      </Description>
      <SubTitle>혈중 중성지방을 개선하는 것이 왜 중요할까요?</SubTitle> 혈중 중성지방은 혈관건강에
      나쁜 콜레스테롤 (LDL-콜레스테롤)의 생성을 돕고, 좋은 콜레스테롤 (HDL-콜레스테롤)의 분해를
      촉진하므로, 혈중 중성지방 수치가 높아지면 동맥경화의 위험이 높아집니다. 따라서 혈중 중성지질의
      수치가 높으면 심장병. 뇌졸중 등 혈관질환이 발생하지 않도록 주의해야 하며, 특히 당뇨병 환자는
      혈중 중성지방 수치가 높아지지 않도록 유지하는 것이 중요합니다.{" "}
      <SubTitle>혈중 중성지방이 증가하는 원인은 무엇일까요?</SubTitle> 소금 및 포화지방산(동물성
      지방, 인스턴트식품 등) 과다 섭취, 과체중, 과도한 스트레스, 흡연은 혈압 유지에 해로울 수
      있습니다. 혈압조절을 위한 일상적인 방법은 무엇일까요? 혈중 중성지방을 증가시키는
      식사요인으로는 술을 많이 마시거나, 기름진 음식 또는 밥, 빵, 면류, 단 음식 등 탄수화물이 많이
      들어있는 음식을 많이 먹는 식습관이 있으며, 갑상선 기능저하증, 간질환자, 신장질환자, 당뇨병
      등의 질병에서도 증가하게 됩니다.{" "}
      <SubTitle>혈중 중성지방 개선을 위한 일상적인 방법은 무엇일까요?</SubTitle> 혈중 중성지방
      수치를 낮추기 위해선 탄수화물의 섭취량을 제한하고 총 지방과 단백질을 적정하게 섭취하여,
      표준체중을 유지하여야 합니다. 따라서 기름이 많은 부위의 고기와 식용유, 버터가 많이 들어간
      케이크, 머핀의 섭취를 주의해야 하며, 탄수화물을 섭취할 때에도 쌀밥 대신 잡곡밥으로 섭취하는
      것이 좋습니다. 술은 칼로리가 높으며 곁들여 먹는 안주는 기름진 음식이 많기 때문에 가급적 마시지
      않는 것이 좋습니다. 중성지방을 원천적으로 줄이기 위해선 식품의 요리방법도 중요한데, 예를 들어
      재료를 튀기거나 볶는 방법 보다는 찌거나 삶는 방법을 이용하는 것이 좋습니다.
      <SubTitle>혈중 중성지방 개선과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?</SubTitle>
      어유에 함유된 EPA는 혈중 중성지방을 줄이는데 도움을 줍니다. 흔히 오메가-3라고 불리는
      불포화지방산에는 리놀렌산(linolenic acid), EPA(eicosapentanoicacid), DHA(docoxahexanoicacid)가
      있습니다. EPA 및 DHA는 청어, 고등어, 정어리, 참치, 연어 등에 많이 들어 있습니다. 이들은
      간에서의 중성지방 합성을 감소시켜 혈중 중성지방 농도를 낮추며 혈소판이 뭉쳐서 굳는 것을
      억제하여 혈전 생성을 방지하는 효과가 있습니다. 섬유소는 당질과 지방의 소화와 흡수를 억제하여
      체지방 감소에 도움을 줄 수 있습니다. 수용성 섬유소는 음식물이 위에서 장으로 배출되는 것을
      느리게 하고, 장에서의 음식물 이동시간을 증가시키며, 혈당이 급격히 상승하는 것을 막아주며, 혈중
      중성지방을 저하시키는 작용을 갖고 있습니다. 음식이 장에 머무는 시간에 변화를 주어 몸에 해로운
      콜레스테롤이 담즙산과 결합하여 배설되도록 하는 작용을 돕고 재흡수 되지 않도록 함으로써 혈중
      중성지방의 농도에 영향을 줍니다.
      <SubTitle>혈중 중성지방 개선에 도움을 주는 건강기능식품 기능성 원료는 무엇일까요?</SubTitle>
      아래 기능성원료를 클릭하시면 기능성원료를 함유한 제품 정보를 확인하실 수 있습니다.
      <ReviewBox tag="triglycerides" /> <ReviewForm tag="triglycerides" />
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

export default TriglyceridesInfo;
