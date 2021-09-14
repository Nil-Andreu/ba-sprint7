import React from "react";
import styled from "styled-components";
import "../styles.css";

// What will render is the text, which is passed as a prop
function Escena(props) {
  return (
    <Container className={props.class}>
      <Paragraph>{props.text}</Paragraph>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  border: solid 2px black;
  border-radius: 50px;
  text-align: center;
  margin: 30px auto;
`;

const Paragraph = styled.p``;

export default Escena;
