import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../components/HomePage";
import GamePage from "../components/GamePage";
import LoginPage from "../components/Login/LoginPage";
import Curiosità from "./curiosity/curiosity2";
import Memory from "./memory/memory";
import ImmaginiBuffe from "./immaginiBuffe/immaginiBuffe";
import VideoBuffi from "./videoBuffi/videoBuffi";
import Quiz from "./quiz/QuizPage";
import HomePageUser from "./UserSection/HomePageUser";
import Ecommerce from "./Ecommerce/Ecommerce";
import Cibo from "./Ecommerce/Cibo";
import Giochi from "./Ecommerce/Giochi";
import Accessori from "./Ecommerce/Accessori";
import Sanitari from "./Ecommerce/Sanitari";
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
        <Route exact path="/LoginPage/HomePageUser" element={<HomePageUser/>}/>
        <Route exact path="/Ecommerce" element={<Ecommerce/>}/>
       
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;