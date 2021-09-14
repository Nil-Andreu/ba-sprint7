import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Escena from "./Escena";
import * as data from "../escenes.json";
import "../styles.css";

function Escenes() {
  const [state, setState] = useState(0);

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
    <Fragment>
      <Buttons>
        <Button onClick={() => passer(0)}>Anterior</Button>
        <Button onClick={() => passer(1)}>Seguent</Button>
      </Buttons>

      {state === 0 ? (
        <Escena text={data[0]} class={"red"}></Escena>
      ) : (
        <Escena text={data[0]}></Escena>
      )}
      {state === 1 ? (
        <Escena text={data[1]} class={"red"}></Escena>
      ) : (
        <Escena text={data[1]}></Escena>
      )}
      {state === 2 ? (
        <Escena text={data[2]} class={"red"}></Escena>
      ) : (
        <Escena text={data[2]}></Escena>
      )}
      {state === 3 ? (
        <Escena text={data[3]} class={"red"}></Escena>
      ) : (
        <Escena text={data[3]}></Escena>
      )}
    </Fragment>
  );
}

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
