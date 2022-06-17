import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import Ecommerce from './components/Ecommerce/Ecommerce';
import HomePageUser from './components/UserSection/HomePageUser';
import HomePageAdmin from './components/admin/HomePageAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePageAdmin/>
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
