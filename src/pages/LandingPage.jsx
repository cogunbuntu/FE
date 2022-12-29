import React from "react";
import styled from "styled-components";
import LandingContainer from "../components/LandingContainer";

const LandingPage = () => {
  return (
    <Container>
      <LandingContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default LandingPage;
