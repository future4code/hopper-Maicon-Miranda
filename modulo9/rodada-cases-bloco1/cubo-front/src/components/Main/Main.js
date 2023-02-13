import React from "react";
import styled from "styled-components";


const Data = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    line-height: 2;
    font-family: Arial, Helvetica, sans-serif;
    

`

function Main() {

    return (
        <Data>
            <h1>DATA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Data>
    )
}

export default Main