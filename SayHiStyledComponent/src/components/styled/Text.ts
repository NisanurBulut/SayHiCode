import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface TextProps {
  theme: DefaultTheme;
}

const Text = styled.p<TextProps>`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size:x-large;
  color: ${({ theme }) => theme.colors.white};
`;

export default Text;
