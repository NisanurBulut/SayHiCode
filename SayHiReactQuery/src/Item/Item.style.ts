import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
width:100%;
border:2px solid #802C6E;
border-radius:15px;
height:100%;

button {
    border-radius:0 0 10px 10px;
}
&:hover button {
    background-color:#802C6E;
    color:#fff;
  }
img {
    max-height:250px;
    object-fit:cover;
    border-radius: 20px 20px 0 0;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height:100%;
}
`;