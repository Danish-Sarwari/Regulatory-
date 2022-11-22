import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navi } from "./components/rici/Navi";
import { TopBar } from "./components/rici/TopBar";
import {Dashboard} from "./components/rici/Dashboard"
import {Resources} from "./components/rici/Resources"

function App() {
  return(
    <React.Fragment>

      <BrowserRouter>
      <TopBar/>
      <Navi/>
        <Routes>
          <Route path="resources" element={<Resources/>}/>
          <Route path="DashBoard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    
    </React.Fragment>
  )

}

export default App;
