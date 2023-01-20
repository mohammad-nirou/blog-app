 import React from 'react'
 import './styles.css'
import logo from './logo_01.jpg'
 const Header = () => (
     <header className='home-header'>
     <div className='home-header__logo'>
        <img 
       className="logo" src={logo} alt='logo..' />
      </div>
        <h2>Technology & Programming </h2>
        <h1>
        <span>"</span>with Moh<span>"</span>
        </h1> 
        <p>
        Awesome place to make oneself <br/> productive and entertained through weekly programming and technology updates.
        </p>
     </header>
   );

 
 export default Header