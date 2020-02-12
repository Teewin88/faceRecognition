import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import ResponseArea from './ResponseArea';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchField:"https://upload.wikimedia.org/wikipedia/commons/c/c3/RH_Louise_Lillian_Gish.jpg",
      responseText:''
    }
  }
  
 
    processImage = async(e)=> {
    const API_KEY = process.env.REACT_APP_FACE_API_KEY
    const uriBase = "https://facialanalytics.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age%2Cgender%2CheadPose%2Csmile%2CfacialHair%2Cglasses%2Cemotion%2Chair%2Cmakeup%2Cocclusion%2Caccessories%2Cblur%2Cexposure%2Cnoise";

    fetch(uriBase, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        "Ocp-Apim-Subscription-Key": API_KEY
      },
      body: JSON.stringify({
        url: this.state.searchField
      }),
    })
    .then(res => res.json())
    .then(data => this.setState({responseText:data}))
  }
 


  


 onSearchChange = (e) =>{
   this.setState({searchField: e.target.value})
 }

  render(){
    return (
      <div className='ma3'>
      <h1 className='navy'>FACE ANALYZER:</h1>
      <p>Enter the URL to an image that includes a face or faces, then click
      the <strong>Analyze face</strong> button.</p>
      <br />
      <div id="search">
      Image to analyze:<SearchBox id='searchBox' searchChange={this.onSearchChange}/> 
      <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-navy bn shadow-3' onClick={this.processImage}>Analyze Face</button>
      </div>
      <br/>
      <ResponseArea imgSource={this.state.searchField} responseJSON={this.state.responseText}/>
      </div>
    );
  }
}

export default App;
