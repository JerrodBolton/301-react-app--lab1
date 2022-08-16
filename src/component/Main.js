import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
import {Form} from 'react-bootstrap'
import rowData from './data.json'


export default class Main extends Component {

  filter = (e) =>{
    const numHorns = parseFloat(e.target.value);
    let photos = rowData;
    if(numHorns){ 
       photos = rowData.filter((make) => make.horns === numHorns);
    
    }
   this.props.displayFilteredImage(photos);
  }


    render() {
        return (
        <div>
         <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" onChange={this.filter}>
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow...</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <CardColumns>
        {this.props.everyBeast.map((horned, idx) => (
          <HornedBeast 
            key={idx}
            index={idx}
            src={horned.image_url}// this what get my pictures up on the website (show)
            title={horned.title}
            description={horned.description}
            displayAsName={this.props.displayAsName}
          />
        ))}
        </CardColumns>
            </div>
        )
  
    }
}
