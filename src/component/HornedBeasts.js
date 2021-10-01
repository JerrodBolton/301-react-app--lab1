import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default class HornedBeasts extends Component {
   constructor(props){
       super(props);
       this.state = {
         likes: 0 
       }
   }

   addLike = () =>{
       this.setState({like: this.state.like + 1}); // this is going to change the number o0f like 
    //    this.props.displayAsModal(this.props.title); 
   }
    render() {
        return (
            <div>
        <Card // this is the style is for the boxs
        style={{ width: '20rem' }}
        bg="dark"
        text="light"
        onClick={this.addLike} 
        >
            <Card.Img variant="top" src={this.props.src} />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
                ❤️ = {this.state.favorites}
            </Card.Text>
            <Card.Text>
                {this.props.description}
            </Card.Text>
            </Card.Body>
        </Card>
            </div>
        )
    }
}
