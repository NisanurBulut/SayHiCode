import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface SearchProps {
  theme: DefaultTheme;
}

const Search = styled.input<SearchProps>`
  margin: 0px 15px 10px 0px;
  padding: 10px;
  width: 25rem;
  border-radius: 5px;
  outline:none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export default Search;
