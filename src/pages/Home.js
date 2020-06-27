import React from 'react';
import styled from 'styled-components';

import Contenido from '../components/Home/Contenido';
import Sidebar from '../components/Home/Sidebar';
import Widget1 from '../components/Home/Widget1';
import Widget2 from '../components/Home/Widget2';
import Footer from '../components/Home/Footer';


const Contenedor = styled.div`
width: 90%;
margin: 20px auto;
max-width: 1200px;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, auto);
height: calc(100vh - 100px);
div {
    border-radius: 4px;
}
`;


function Home() {
    return (
        <Contenedor>
            <Contenido />
            <Sidebar />
            <Widget1 />
            <Widget2 />
            <Footer />
        </Contenedor>
    );
}

export default Home;
