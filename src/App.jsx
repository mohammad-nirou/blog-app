import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div  className='container'>
     
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        
        <Footer />
      
      
      
    </div>
  );
};

export default App;