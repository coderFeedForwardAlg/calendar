import styled from '@emotion/styled';


export let CalendarStyle = styled.div`
font: roboto;
float: left;
font-size: 25px;
background: red;
max-height: 75vh;
width: 25%;
margin: 40px;
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

@media (min-width: 420px) {
    font-size: 30px;
    width: 60%;
}
`;
