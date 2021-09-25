import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
import rowData from './data.json'



console.log(rowData);





export default class Main extends Component {

 
    render() {
        return (
            <div>
        <CardColumns>
        {this.props.everyBeast.map((horned, idx) => (
          <HornedBeast 
            key={idx}
            index={idx}
            src={horned.image_url}// this what get my pictures up on the website (show)
            title={horned.title}
            description={horned.description}
            displayAsModal={this.props.displayAsModal}
          />
        ))}
        </CardColumns>
            </div>
        )
  
    }
}
