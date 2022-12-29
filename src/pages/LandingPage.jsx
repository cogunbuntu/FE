import React from "react";
import styled from "styled-components";
import Body from "../components/Body";

const LandingPage = () => {
  return (
    <Container>
      <Body />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default LandingPage;
