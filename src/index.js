import React from 'react';
import ReactDOM from 'react-dom';
import MapboxDrawComponent from "./ExampleComponent";
import './index.css'

const RetoolConnectedComponent = Retool.connectReactComponent(MapboxDrawComponent);
document.body.setAttribute('style', 'margin: 0;') 
ReactDOM.render(
  <RetoolConnectedComponent/>, 
  document.body.appendChild(document.createElement('div')) 
);