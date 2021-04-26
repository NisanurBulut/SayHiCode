import React, { useState } from "react";
import { useQuery } from 'react-query'
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

const BASE_URL="https://v2.jokeapi.dev/joke/Any";

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
