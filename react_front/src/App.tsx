import './App.css'

import { Router } from './router';
import { TaskProvider } from "./context/TaskContext";
import  { AsideContainer }  from './components/AsideContainer.tsx'

function App() {

  return (
     <TaskProvider>
         <AsideContainer/>
         <Router />
     </TaskProvider>
  );
}

export default App
