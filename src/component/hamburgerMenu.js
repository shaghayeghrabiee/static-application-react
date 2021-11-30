import React from 'react';
import styled from 'styled-components';

const HamburgerMenu = () => {
    const Ul= styled.ul`
        display :flex;
        list-style:none;
        justify-content: right;
        z-index:15;
        margin: 20px 50px;
        li{
           padding:18px 30px 
        }
        @media(max-width :768px){
           background-color: #1565df;
           flex-direction:column;
           margin:0;
           padding:10px ;
           position:fixed;
           right:0;
           top:0
        }
    `
    return ( 
        <Ul>
            <li>Home Page</li>
            <li>Laptop</li>
            <li>Mobile</li>
            <li>Note Pad</li>
        </Ul>
     );
}
 
export default HamburgerMenu;