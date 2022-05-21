import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../components/HomePage";
import GamePage from "../components/GamePage";
import LoginPage from "../components/LoginPage";
import Curiosità from "../components/curiosity";
import Memory from "../components/memory";
  
function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/GamePage" element={<GamePage/>}/>
        <Route exact path="/LoginPage" element={<LoginPage/>}/>
        <Route exact path="/GamePage/curiosity" element={<Curiosità/>}/>
        <Route exact path="/GamePage/Memory" element={<Memory/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;