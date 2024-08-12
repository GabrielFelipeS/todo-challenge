import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChangeColorPage from "./pages/ChangeColorPageTest";
import Home from "./pages/Home"
import Tomorrow from "./pages/Tomorrow"
import ThisWeek from "./pages/ThisWeek"
import SevenDays from "./pages/SevenDays"
import AllTasks from "./pages/AllTasks"
import Planned from "./pages/Planned"
import Concluded from "./pages/Concluded"

export function Router() {

  return (
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/today" element={<Home/>}/>
         <Route path="/tomorrow" element={<Tomorrow/>}/>
         <Route path="/thisweek" element={<ThisWeek/>}/>
         <Route path="/sevendays" element={<SevenDays/>}/>
         <Route path="/planned" element={<Planned/>}/>
         <Route path="/concluded" element={<Concluded/>}/>
         <Route path="/tasklist" element={<AllTasks/>}/>
         <Route path="/ChangeColorTest" element={<ChangeColorPage/>}/>
     </Routes>
   </BrowserRouter>
  )
}
