
// import './App.css';
import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import rowData from './component/data.json';
import selectedHorned from './component/selectedHorned';




export default class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      everyBeast: rowData, 
      displayModal:false, 
      selectedHorned:{},
    }
  }

  displayAsName = (name) => {
    const selectedHorned = rowData.find( horned => horned.title === name); 
    this.setState({selectedHorned, displayModal: true });
  }




  render() {
    return (
  
    <div className="App">
   
     <Header />

     <Main
     
     everyBeast={this.state.everyBeast} // I know this will make my  website render everything from the rowData 
     displayAsName = {this.displayAsName}
    //  displayFilteredImage =
     
     
     
     /> 
    {/* this has hornedBeast*/}
    <Footer/>

      </div>
    )
  }
}
