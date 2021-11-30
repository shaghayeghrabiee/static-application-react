import React, { Component } from 'react';
import Styles from './NavBar.module.css';
import Logo from '../images/logo.jfif';

const NavBar = () => {
    return ( 
        <header className={Styles.header}>
            <div className={Styles.ListContainer}>
                <ul className={Styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                    <img  className={Styles.logo} src={Logo} alt=""/>
            </div>

            
        </header>
     );
}
 
export default NavBar;