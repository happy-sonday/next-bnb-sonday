import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 500px;
  height: 614px;
  background-color: white;
  z-index: 11;
`;

const SignUpModal: React.FC = () => {
  return <Container>Sign Up</Container>;
};

export default SignUpModal;
