import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface WrapperProps {
        theme:DefaultTheme
}
const Wrapper = styled.div<WrapperProps>`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width:80rem;
        padding:20px;
        margin:0 auto;
        `;

export default Wrapper;