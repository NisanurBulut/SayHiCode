import React from "react";
import {
  CardWrapper,
  CardTop,
  CardBottom,
  Setup,
  Delivery,
} from "./styled/index";
import { Joke } from "../types/Joke";

interface JokeItemProps {
  joke: Joke;
}
const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
  return <div></div>;
};

export default JokeItem;
