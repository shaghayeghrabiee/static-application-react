import React, { Component } from 'react';
import Style from './card.module.css';
// import * as Arrow from 'react-icons/bs';

import up from '../images/up.png';
import down from '../images/down.png';

class Card extends Component {
    state={
        counter:0,
        
    }
    upHandle=()=>{
        this.setState(prevState=>({
            counter:prevState.counter+1,
        }))
    }
    downHandle=()=>{
        if(this.state.counter>=1){
           this.setState(prevState=>({
           counter:prevState.counter-1,

       }))
        }
    }

    render() { 
        const {image,title,cost}=this.props;
        const {counter}=this.state;
        return ( 
            
        <div className={Style.container}>
            <img src={image} alt="apple"/>
            <h3>{title}</h3>
            <p>{cost}</p>  
            <div className={Style.image}>
               <img src={down} alt="" onClick={this.downHandle}  className={!this.state.counter==0 ? "": Style.disActive}/>
               <span>{counter}</span>
                <img src={up} alt="" onClick={this.upHandle} />
            </div>    

        </div>);
    }
}
 
export default Card;