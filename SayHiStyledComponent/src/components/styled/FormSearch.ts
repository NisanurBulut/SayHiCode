import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface FormSearchProps {
  theme: DefaultTheme;
}

const FormSearch = styled.form<FormSearchProps>`
 padding:10px;
 margin-top:10px;
 border-radius:5px;
 border:none;
 outline:none;
`;

export default FormSearch;
