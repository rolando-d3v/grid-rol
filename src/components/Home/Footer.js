import React from 'react'
import styled from 'styled-components';

const Footerx = styled.div`
background-color: #424242;
padding:20px;
/* grid-column-start: 1;
grid-column-end: -1; */
grid-column: span 3;
display: flex;
align-items: center;
justify-content: center;

`;


function Footer() {
    return (
        <Footerx>
            <h3 >Footer</h3>
        </Footerx>
    )
}

export default Footer
