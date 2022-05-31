import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../components/HomePage";
import GamePage from "../components/GamePage";
import LoginPage from "../components/LoginPage";
import Curiosità from "../components/curiosity2";
import Memory from "../components/memory";
import ImmaginiBuffe from "../components/immaginiBuffe";
import VideoBuffi from "../components/videoBuffi";
import Quiz from "../components/Quiz";
  
function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/GamePage" element={<GamePage/>}/>
        <Route exact path="/LoginPage" element={<LoginPage/>}/>
        <Route exact path="/GamePage/curiosity2" element={<Curiosità/>}/>
        <Route exact path="/GamePage/Memory" element={<Memory/>}/>
        <Route exact path="/GamePage/ImmaginiBuffe" element={<ImmaginiBuffe/>}/>
        <Route exact path="/GamePage/VideoBuffi" element={<VideoBuffi/>}/>
        <Route exact path="/GamePage/Quiz" element={<Quiz/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;