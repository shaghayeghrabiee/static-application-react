import React, { Component } from 'react';
import Style from './Banner.module.css';
import banner from '../images/wallpaper.png';

const Banner = () => {
    return ( 
        <div className={Style.container}>
            <img  src={banner} alt=""/>
            <div className={Style.text}>
                <h1>Store</h1>
                <button type="button">Buy Products</button>
            </div>
        </div>
     );
}
 
export default Banner;