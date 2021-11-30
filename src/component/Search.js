import React ,{Component}from 'react';
import styled from 'styled-components';

 const Div= styled.div`
        display :flex;
        width: 100%;
        background-color:rgb(123, 123, 153);
        height:100px;
        justify-content: center;
        align-items:center;
        color:white;
        padding:10px;
        font-size:2rem;
        input{
            margin:30px;
            height:50px;
            width: 400px;
             border-radius: 10px;
             border:none

        }
        input:: placeholder{
            font-size:1.7rem
        }
   
    `;


class Search extends Component {
   state={
       text:""
   }

     changeHandler=event=>{
        this.setState({text:event.target.value})
    }
    render() { 
        return (<Div>
            <h3>What do you want to search?</h3>
            <input type="text" placeholder="Search..." onChange={this.changeHandler} value={this.state.text}/>
        </Div>) 
    }
}
 
export default Search;
