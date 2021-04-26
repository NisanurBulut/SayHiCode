import React from "react";
import logo from "./logo.svg";
import { Wrapper, Row, Header, Image } from "./components/styled/index";
import cat from "./images/cat.png";
function App() {
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Say Hi Styled Component</Header>
          <Image src={cat} alt="Cat" />
        </Row>
      <h1>App</h1>
      </Wrapper>
    </div>
  );
}

export default App;
