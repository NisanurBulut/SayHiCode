import React, { useState } from "react";
import {
  Wrapper,
  Row,
  Header,
  Image,
  FormSearch,
  Button,
  Search,
  Text,
} from "./components/styled/index";
import JokeItem from './components/JokeItem';
import cat from "./images/cat.png";
import axios from "axios";
import { Joke } from "./types/Joke";


require('dotenv').config()

const App:React.FC=()=>{

  

  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ENDPOINT = `${process.env.REACT_APP_BASE_URL}?contains=${search}&amount=10`;
    const { data } = await axios.get(ENDPOINT);
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }
    setSearch("");
  };
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Say Hi Styled Component</Header>
          <Image src={cat} alt="Cat" />
        </Row>
        <FormSearch onSubmit={getJokes}>
          <Search
            type="text"
            placeholder="Search Joke"
            value={search}
            onChange={handleSearchChange}
          />
          <Button type="submit">Search</Button>
        </FormSearch>
        {error && <Text>Sorry, no jokes found</Text>}
        {
          jokes.length>0 &&
          jokes.map((joke)=><JokeItem key={joke.id} joke={joke} />)
        }
      </Wrapper>
    </div>
  );
}

export default App;
