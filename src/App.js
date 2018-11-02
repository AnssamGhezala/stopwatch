import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {counter:0, running:false};
  interval = {};
 
  clearEvent = () => {
    console.log("clear event");
    this.setState({counter:0,running:false});
    clearInterval(this.interval);    
}

   stopEvent = () => {
 
   
   var lastCounter = this.state.counter;
   this.setState({counter:lastCounter,running:false});
   clearInterval(this.interval); 

   }

  startEvent = () => {
    


    var time = 0;   

        if(this.state.running == false) {
          this.setState({running:true});
           this.interval = setInterval(() => {
            
            time = this.state.counter+1;
            this.setState({counter:time});   
            });
        } 
       
  } 


  render() {
    const element = this.state;
    const nowTime = element.counter;
    return (
      <center className="stopwatch">
      <label className="rounded-circle border border-primary"> {element.counter} ms </label>
      <button onClick={this.startEvent} className="btn btn-outline-success startBtn">Start</button>
      <button onClick={this.stopEvent} className="btn btn-outline-dark stopBtn" >Stop</button> 
      <button onClick={this.clearEvent} className="btn btn-outline-danger clearBtn" >Clear</button>
      
      </center>
    );
  }
}

export default App;
