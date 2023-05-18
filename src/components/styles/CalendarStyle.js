import styled from '@emotion/styled';

let margin = 5;
export let CalendarStyle = styled.div`
font: roboto;
float: left;
font-size: 25px;
background: red;
max-height: 75vh;
width: 60%;
margin: ${margin}% 0 0 ${margin}%;
padding: 5px;
background-color: white;
border-radius: 5px;
overflow: auto;

// hide scroll bar 
-ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none;  /* Firefox */
::-webkit-scrollbar {
    display: none;
}

@media (max-width: 769px) {
    font-size: 25px;
    width:90%;
}

// ********************************** figer out how to clear floats **********************************
// :after{
//     content: "hi";
//     display: block;
//     clear: both;
//  }
`;
