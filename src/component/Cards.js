import React, { Component } from 'react'
import Card from './Card';
import style from './Cards.module.css';
import apple2 from '../images/apple.jpg';
import apple from '../images/apple.jfif';
import applelaptop from '../images/apple-laptop.jfif';
import laptop from '../images/laptop.jpg';
import samsung from '../images/galaxy.jfif';
import {v4} from 'uuid';




class Cards extends Component {
            state={
            phoneData:
            [
                {image:apple ,title:"iphone", cost:"500"},
                {image:applelaptop ,title:"apple laptop", cost:"1500"},
                {image:laptop,title:"laptp" ,cost:"1000" },
                {image:apple2, title:"iphone", cost:"500"},
                {image:samsung ,title:"Samsung",cost:"200"}
            ]
        }
    render() { 

       const {phoneData}=this.state;
        return (  
            <div className={style.container}> 
                {phoneData.map(phone=> <Card key={v4()} image={phone.image} title={phone.title} cost={phone.cost} />)}
            </div>
        )
    }
}
 
export default Cards;