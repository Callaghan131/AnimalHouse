import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/HomePage';
import Game from './components/GamePage';
import Curiosità from './components/curiosity';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import App from './components/App';
import VideoBuffi from './components/videoBuffi';
import './videoBuffi.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoBuffi/>
  </React.StrictMode>
);

// ReactDOM.render(
//   <Router>
//       <div className="HomePage">
//           <HomePage />
//           <Routes />
//       </div>
//   </Router>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your HomePage, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
