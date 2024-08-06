import './App.css'

import { Router } from './router';
import {AppProvider} from "./AppContext.tsx";
import NavBar  from './components/navbar'

function App() {

  return (
     <AppProvider>
         <NavBar/>
         <Router />
     </AppProvider>
  );
}

export default App
