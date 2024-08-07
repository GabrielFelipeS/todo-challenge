import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChangeColorPage from "./pages/ChangeColorPageTest";
import Home from "./pages/Home"

export function Router() {

  return (
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/ChangeColorTest" element={<ChangeColorPage/>}/>
     </Routes>
   </BrowserRouter>
  )
}
