import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {counter:0, running:false};
  interval = {};
 
  clearEvent = () => {
    this.setState({counter:0,running:false});
    clearInterval(this.interval);
}

  startEvent = () => {
  
    var time = 0;   
 
        if(this.state.running == false) {
           
           this.interval = setInterval(() => {
            time = time+1;
            this.setState({counter:time});   
            });

        } else {
            this.clearEvent();
        }
        
  } 


  render() {
    const element = this.state;
    return (
      <div>
      <label>{element.counter}ms</label>
      <button onClick={this.startEvent} className="startBtn">Start</button>
     {/* <button onClick={this.stopEvent} className="stopBtn" >Stop</button> */}
      <button onClick={this.clearEvent} className="clearBtn" >Clear</button>
      
      </div>
    );
  }
}

export default App;
