import { Category } from "./Category";
import { Flag } from "./Flag";
export type Joke = {
  id: number;
  safe: boolean;
  lang: "cs" | "de" | "en";
  type: "single" | "twopart";
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: Flag;
  category: Category
};
