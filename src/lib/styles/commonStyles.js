import styled from "styled-components";
import transitions from "./transitions";

// eslint-disable-next-line import/prefer-default-export
export const DescriptionContainer = styled.div`
  width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  animation: ${transitions.fadeIn} 0.5s ease-in-out;
`;
