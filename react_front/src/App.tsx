import './App.css'

import { Router } from './router';
import {AppProvider} from "./AppContext.tsx";
import  NavBar  from './components/sideBar.tsx'

function App() {

  return (
     <AppProvider>
         <NavBar/>
         <Router />
     </AppProvider>
  );
}

export default App
