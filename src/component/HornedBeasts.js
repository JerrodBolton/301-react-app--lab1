import React, { Component } from 'react'
// import Unicorn from './image/Unicorn'




export default class HornedBeasts extends Component {
    
    constructor(props){
    super(props)
    this.title = "UniWhal"; 
    this.imageUrl = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";  // I think that I need to put anther child
    this.description = "A unicorn and a narwhal nuzzling their horns";
    }

//  this.title = title; 
//  this.imageUrl = imageUrl; 
//  this.description = description;
//  this.keyword = keyword; 
//  this.horns = horns;

    render() {
        return (
            <div>
               {/* <h1> Jerrod </h1>  */}
               {/* I think that what ever I out in this is going to render to the parent main */}



              <h1>{this.title}</h1>
              {/* <Unicorn/> */}
              <p>{this.description}</p>
              
               
               
            

            </div>
        )
    }
}
