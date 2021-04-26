import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface CardProps {
  theme: DefaultTheme;
}

const CardWrapper = styled.div<CardProps>`
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  margin: 15px 0px;
  width: 650px;
  height: 180px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  font-size: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardTop = styled.div<CardProps>`
  text-align: center;
  background: ${(props) => props.theme.colors.white};
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: auto;
  &:hover {
    filter: brightness(85%);
  }
`;

const Setup = styled.p<CardProps>`
  font-size: 16px;
  flex: 1;
`;

const Delivery = styled.p<CardProps>`
  font-size: 16px;
  flex: 1;
  font-weight: 500;
`;

const CardBottom = styled.div<CardProps>`
  background: ${(props) => props.theme.colors?.secondary};
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export { CardWrapper, CardTop, CardBottom, Setup, Delivery };