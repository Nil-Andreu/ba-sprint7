import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Escena from "./Escena";
import data from "../escenes";

const b1 = data[0][1];
const b2 = data[1][1];
const b3 = data[2][1];
const b4 = data[0][1];

// Note we pass the passer function as an arrow function, this way it will only be executed when is on click and we do not create an infinite loop
// (as the value () would make to be executed when is rendered)
function Escenes() {
  const [state, setState] = useState(0);

  const imageRenderer = () => {
    if (state === 0) {
      return <Image src={data[0]["img"]} />;
    }
    if (state === 1) {
      return <Image src={data[1]["img"]} />;
    }
    if (state === 2) {
      return <Image src={data[2]["img"]} />;
    }
    if (state === 3) {
      return <Image src={data[3]["img"]} />;
    }
  };

  const passer = (number) => {
    if (number === 0) {
      if (state === 0) {
        setState(3);
      } else {
        setState(state - 1);
      }
    } else {
      if (state === 3) {
        setState(0);
      } else {
        setState(state + 1);
      }
    }
  };

  return (
    <div>
      {imageRenderer()}
      <Buttons>
        <Button onClick={() => passer(0)}>Anterior</Button>
        <Button onClick={() => passer(1)}>Seguent</Button>
      </Buttons>
      {state === 0 ? (
        <Escena text={data[0]["text"]} class={"red"}></Escena>
      ) : (
        <Escena text={data[0]["text"]} class={"white"}></Escena>
      )}
      {state === 1 ? (
        <Escena text={data[1]["text"]} class={"red"}></Escena>
      ) : (
        <Escena text={data[1]["text"]} class={"white"}></Escena>
      )}
      {state === 2 ? (
        <Escena text={data[2]["text"]} class={"red"}></Escena>
      ) : (
        <Escena text={data[2]["text"]} class={"white"}></Escena>
      )}
      {state === 3 ? (
        <Escena text={data[3]["text"]} class={"red"}></Escena>
      ) : (
        <Escena text={data[3]["text"]} class={"white"}></Escena>
      )}
    </div>
  );
}

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Buttons = styled.div`
  width: 100vw;
  height: 10vh;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Button = styled.button`
  width: 40%;
`;

export default Escenes;
