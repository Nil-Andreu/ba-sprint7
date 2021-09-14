import { Fragment } from "react";
import Escena from "./escena/Escena";
import * as data from "./escenes.json";

// What we will do is pass as props the data from the jso
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
