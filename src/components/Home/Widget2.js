import React from 'react'
import styled from 'styled-components';

const Widget2x = styled.div`
background-color: #536555;
padding:20px;
display: flex;
align-items:center;
justify-content: center;
`;

function Widget2() {
    return (
        <Widget2x>
            <h3>widget 2</h3>
        </Widget2x>
    )
}

export default Widget2
