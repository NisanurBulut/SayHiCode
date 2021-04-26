import React, { useState } from "react";
import logo from "./logo.svg";
import {
  Wrapper,
  Row,
  Header,
  Image,
  Form,
  Search,
} from "./components/styled/index";
import cat from "./images/cat.png";
function App() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Say Hi Styled Component</Header>
          <Image src={cat} alt="Cat" />
        </Row>
        <Form onSubmit={}>
          <Search
            type="text"
            placeholder="Search Joke"
            value={search}
            onChange={handleSearchChange}
          />
         
        </Form>
      </Wrapper>
    </div>
  );
}

export default App;
