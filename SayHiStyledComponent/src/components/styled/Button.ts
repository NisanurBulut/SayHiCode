import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  padding: 10px;
  border-radius: 5px;
  border:none;
  width:5rem;
  background-color:${({theme})=>theme.colors.secondary};
  color:${({theme})=>theme.colors.white};
`;

export default Button;
