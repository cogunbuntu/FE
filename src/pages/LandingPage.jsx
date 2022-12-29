import React from "react";
import styled from "styled-components";
import Example from "../components/Example";

const LandingPage = () => {
  return (
    <Container>
      <Example />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default LandingPage;
