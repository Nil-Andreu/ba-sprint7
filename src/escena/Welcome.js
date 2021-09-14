import React, { Fragment } from "react";
import styled from "styled-components";

function Welcome(props) {
  return (
    <Fragment>
      <Container>
        <Paragraph>Estas preparat/da per la història?</Paragraph>
        <Button onClick={props.onChangeScenario}>Començar!</Button>
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Paragraph = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  height: 4rem;
  width: 12rem;
  margin: auto;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
`;

export default Welcome;
