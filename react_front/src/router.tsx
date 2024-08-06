import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChangeColorPage from "./pages/ChangeColorPageTest";

export function Router() {

  return (
   <BrowserRouter>
     <Routes>
       <Route path="/ChangeColorTest" element={<ChangeColorPage/>}/>
     </Routes>
   </BrowserRouter>
  )
}
