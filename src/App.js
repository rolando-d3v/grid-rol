import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import styled from 'styled-components';

//pages
import Home from './pages/Home';
import Header from './components/Header';
import Grid2 from './pages/Grid2';




// const Contenedor = styled.div`
// background-color: red;
// `;


function App() {
  return (
    <div  >
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/grid2" component={Grid2} />
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
