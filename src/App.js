import React from 'react'
 import "./App.css" ;
 import FacultyPage from './Pages/FacultyPage';
 import Leave from './Pages/Leave';
 
import {   Routes,Route} from 'react-router-dom';
import Stopwatch from './Pages/Watch/StopWatch';

function App() {
  return (
    
  <>
  
     <Routes>
      <Route path='/' element={<FacultyPage/>} />
      <Route path='/Leave' element={<Leave/>} />
      <Route path='/clock' element={<Stopwatch/>}/>
    </Routes>  
    </>
  );
}

export default App