import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';


// if(JSON.parse(localStorage.getItem('data'))) {
//   window.location.reload()
// }

ReactDOM.render(

  <BrowserRouter>
         <App />
  </BrowserRouter> , document.getElementById('root')
);


