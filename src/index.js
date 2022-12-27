import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

const currentTime = new Date().getHours(); 
let greeting = '';
let cssStyle = {};
if(currentTime<12){
  greeting = 'Good Morning';
  cssStyle.color = "Yellow";
}
else if(currentTime>=12 && currentTime<17){
      greeting = 'Good Afternoon';
      cssStyle.color = "Orange";
}
else if (currentTime>=17 && currentTime<20){
      greeting = "Good Evening";
      cssStyle.color = "Purple";
}
else {
  greeting = 'Good Night';
  cssStyle.color = "Red";
}
ReactDOM.render(
  <>
  <div>
  <h1>Hello world, <span style={cssStyle}>{greeting}</span> </h1>
  </div>
  </>,
  document.getElementById("root")
);