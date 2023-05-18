import styled from '@emotion/styled'


let margin = 5;
export let ToDoStyle1 = styled.div`
font: roboto;
float: left;
font-size: 30px;
background: red;
height: 75vh;
overflow: auto;

// hide scroll bar 
-ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none;  /* Firefox */
::-webkit-scrollbar {
    display: none;
}

width: 25%;
margin: ${margin}% 0 0 ${margin}%;
padding: 5px;

@media (max-width: 769px) {
    font-size: 25px;
    width:90%;
}
`;


