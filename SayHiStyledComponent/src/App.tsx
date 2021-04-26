import React, { useState } from "react";
import logo from "./logo.svg";
import {
  Wrapper,
  Row,
  Header,
  Image,
  FormSearch,
  Button,
  SearchInput,
} from "./components/styled/index";
import cat from "./images/cat.png";
function App() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const getJokes = async(event:React.FormEvent<HTMLFormElement>)=>{

  }
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Say Hi Styled Component</Header>
          <Image src={cat} alt="Cat" />
        </Row>
        <FormSearch onSubmit={getJokes}>
          <SearchInput
            type="text"
            placeholder="Search Joke"
            value={search}
            onChange={handleSearchChange}
          />
          <Button type="submit">Search</Button>
        </FormSearch>
      </Wrapper>
    </div>
  );
}

export default App;
