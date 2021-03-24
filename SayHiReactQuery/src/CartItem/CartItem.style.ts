import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
font-family: Arial, Helvetica, sans-serif;
border-bottom:1px solid #802C6E;
padding-bottom:20px;

div {
    flex:1;
}
Button {
    width:50px;
    height:50px;
    font-size:x-large;
}
.information,
.buttons {
    display:flex;
    justify-content:space-between;
}
Button {
    border-radius:5%
}
img {
    max-width:120px;
    object-fit:cover;
    margin-left:40px;
}
`;