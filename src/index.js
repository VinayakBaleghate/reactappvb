import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mystyle.css';
//import App from './App';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Signup from './component/Signup';
import reportWebVitals from './reportWebVitals';

var userDetails = {
	userName: "Vinayak",
	password: "123456"
}



ReactDOM.render(
  <React.StrictMode>
    <Navbar sitetitle="MyReactApp" mylink="test" userDetails={userDetails} ></Navbar>
    <Slider />    
    <Signup />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
