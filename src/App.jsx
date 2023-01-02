import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div  className='container'>
     
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        
      
      
      
    </div>
  );
};

export default App;