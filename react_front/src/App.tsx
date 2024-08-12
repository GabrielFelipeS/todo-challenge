import './App.css'

import { Router } from './router';
import { TaskProvider } from "./context/TaskContext";
import  { AsideContainer }  from './components/AsideContainer'
import styled from "styled-components";


const PageContent = styled.div.attrs({
    className: 'flex'
})``;

function App() {
  return (
     <TaskProvider>
         <PageContent>
             <AsideContainer/>
             <Router/>
         </PageContent>
     </TaskProvider>
  );
}

export default App
