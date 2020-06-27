import React from 'react'
import styled from 'styled-components';

const Sidebarx = styled.div`
min-height: 100px;
background-color: green;
padding:20px;
grid-column: 3 / 4;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
grid-row: span 2;

@media screen and (max-width: 768px) {
        grid-column: span 3;
        
}

`;

function Sidebar() {
    return (
        <Sidebarx>
            <h3>sidebar</h3>
        </Sidebarx>
    )
}

export default Sidebar
