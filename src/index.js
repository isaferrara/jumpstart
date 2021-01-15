import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'

const Back=styled.div`
    width: 100%;
    height: 100vh;
    background-color: gray;
`

 const PositionedLeft= styled(App)`
    position:absolute;
    left: 10%;
    top: 10%;
 ` 
  const PositionedRight= styled(App)`
    position:absolute;
    right: 40%;
    top: 10%;

  ` 

ReactDOM.render(
  <Back>
    <PositionedLeft/>
    <PositionedRight/>
  </Back>,
  document.getElementById('root')
);

reportWebVitals();
