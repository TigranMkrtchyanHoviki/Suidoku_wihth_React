import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const arr = [
//   [1, 2, 3],
//    [5, 3, 8],
//    [6, 9, 7]
// ]

// const c = ["dsdsd", true, "5"]

// const a = arr.map((elem, i) => {
//   if(i === 0) {
//     return c
//   }else {
//     return elem.map((elemenet, ind) => {
//       return "ccc" + elemenet
//     })
//   }
// })

// console.log("a" , a)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
