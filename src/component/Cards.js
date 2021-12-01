import React, { Component } from 'react'
import Card from './Card';
import style from './Cards.module.css';
import apple2 from '../images/apple.jpg';
import apple from '../images/apple.jfif';
import applelaptop from '../images/apple-laptop.jfif';
import laptop from '../images/laptop.jpg';
import samsung from '../images/galaxy.jfif';




class Cards extends React.Component {
    render() { 
        return (
            <div className={style.container}> 
                <Card image={apple} title="iphone" cost="500"/>
                <Card image={applelaptop} title="apple laptop" cost="1500" />
                <Card image={laptop} title="laptp" cost="1000" />
                <Card image={apple2} title="iphone" cost="500" />
                <Card image={samsung} title="Samsung" cost="200" />
            </div>
        )
    }
}
 
export default Cards;