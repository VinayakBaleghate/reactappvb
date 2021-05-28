import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mystyle.css';
//import App from './App';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Slider />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
