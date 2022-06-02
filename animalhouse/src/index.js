import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './components/App';

import VideoBuffi from './components/videoBuffi/videoBuffi';
import ImmaginiBuffe from './components/immaginiBuffe/immaginiBuffe';
import Curiosity2 from './components/curiosity/curiosity2';
import Quiz from './components/quiz/QuizPage';
import Board from './components/board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
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
