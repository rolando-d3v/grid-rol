import React from 'react'
import styled from 'styled-components';

const Widget1x = styled.div`
background-color: #536555;
padding:20px;
display: flex;
align-items:center;
justify-content: center;

@media screen and (max-width: 768px) {
        grid-column: span 2;  
}

`;

function Widget1() {
    return (
        <Widget1x>
            <h3>widget 1</h3>
        </Widget1x>
    )
}

export default Widget1
