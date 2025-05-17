import React, { useState } from 'react';
import './Header.css';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

function Header() {
    const [showDropDown, setShowDropDown] = useState(false);
    function handleShowDropDown(){
        setShowDropDown((showDropDown) => !showDropDown);
    };
  return (
    <>
    <div className='header'>
        <div className='header-logo'>
            <h3>VASTRA</h3>
        </div>
        <div className='header-items'>
            <span>Home</span>
            <span>Collection</span>
            <span>About Us</span>
            <span>Contact</span>
        </div>
        <div className='header-icons'>
            <div className='header-iconsSearch'><FaSearch /></div>
            <div><FaCartPlus /></div>
            <div className='header-iconsmenu' onClick={()=>handleShowDropDown()}><IoMenu /></div>
        </div>
        {showDropDown && (
<div className='header-dropDown'>
            <ul className='header-dropDownUl'>
                <li>Home</li>
                <li>Collection</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
        )}
        
    </div>
    </>
  )
}

export default Header