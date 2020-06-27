import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from '@emotion/core';

const Navegation = styled.div`
background-color: #12203e;
color: #fff;
height: 50px;
padding: 5px 15px;
 div {
     display: flex;
     height: 100%;
     justify-content: start;
     align-items: center;
     display: grid;
     grid-template-columns: repeat(3, 10%);
     grid-gap: 5px;
     text-align: center;
 }
`;

const Spanx = styled.span`
    text-decoration: none;
    text-decoration-style: none;  
`;


function Header() {
    return (
        <Navegation>
            <div>
                <h3 css={css`color: red;`}
                >header</h3>
                <Spanx>
                    <Link to="/" >
                        Home
                    </Link>
                </Spanx>
                <Spanx>
                    <Link to="/grid2" >
                        Grid2
                    </Link>
                </Spanx>
            </div>
        </Navegation>
    )
}

export default Header
