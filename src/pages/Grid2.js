import React from 'react';
import "./Grid2.scss"

import Contenido from '../components/grid2/Contenido';
import Sidebar from '../components/grid2/Sidebar';
import Widget1 from '../components/grid2/Widget1';
import Widget2 from '../components/grid2/Widget2';
import Footer from '../components/grid2/Footer';


// const Contenedor = styled.div`
// width: 90%;
// margin: 20px auto;
// max-width: 1200px;
// display: grid;
// grid-gap: 20px;
// grid-template-columns: repeat(3, 1fr);
// grid-template-rows: repeat(3, auto);
// height: calc(100vh - 100px);
// div {
//     border-radius: 4px;
// }
// `;


function Grid2() {
    return (
        <div className="contenedor">
            <Contenido />
            <Sidebar className="sidebar"  />
            <Widget1 className="widget1"  />
            <Widget2  className="widget2" />
            <Footer className="footer" />
        </div>
    );
}

export default Grid2;
