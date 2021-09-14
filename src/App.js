import { useState } from "react";
import styled from "styled-components";
import Escenes from "./escena/Escenes";
import Welcome from "./escena/Welcome";

// We will lift state up, by defining a function and passing then this function as a prop. Where the function will be used in the child
// with the values from it. So this way we will pass values from the bottom to the top.
function App() {
  const [isScenario, setIsScenario] = useState(true);

  const changeScenario = () => {
    setIsScenario(!isScenario);
  };

  return (
    <Container>
      {isScenario ? <Welcome onChangeScenario={changeScenario} /> : <Escenes />}
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

export default App;
