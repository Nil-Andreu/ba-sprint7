import { Fragment } from "react";
import Escena from "./escena/Escena";
import * as data from "./escenes.json";

function App() {
  return (
    <Fragment>
      <Escena text={data[0]} />
      <Escena text={data[1]} />
      <Escena text={data[2]} />
      <Escena text={data[3]} />
    </Fragment>
  );
}

export default App;
