import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Buy from './components/Buy';
import {BrowserRouter , Routes,Route } from 'react-router-dom';




function App() {
  return (
  
    <div  className='App'>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/> } />
        </Routes>
        <Routes>
          <Route path='/Buy' element={<Buy/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  
  );
    
}

export default App;
