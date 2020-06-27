import React from 'react'
import styled from 'styled-components';

const Contenidox = styled.div`
background-color: #42424242;
padding:20px;
grid-column: span 2;

@media screen and (max-width: 768px) {
        grid-column: span 3;  
}

`;



function Contenido() {
    return (
        <Contenidox>
            <h3>Contenido</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur natus, sit maxime ratione quo eius eveniet quidem, odio voluptas dolore tempora itaque, fugiat provident labore obcaecati illo sunt. Nihil itaque vitae illo, voluptate ad exercitationem voluptatum aliquam dolores eos!
            </p>
            <br/>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur natus, sit maxime ratione quo eius eveniet quidem, odio voluptas dolore tempora itaque, fugiat provident labore obcaecati illo sunt. Nihil itaque vitae illo, voluptate ad exercitationem voluptatum aliquam dolores eos!
            </p>
            <br/>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur natus, sit maxime ratione quo eius eveniet quidem, odio voluptas dolore tempora itaque, fugiat provident labore obcaecati illo sunt. Nihil itaque vitae illo, voluptate ad exercitationem voluptatum aliquam dolores eos!
            </p>
        </Contenidox>
    )
}

export default Contenido
