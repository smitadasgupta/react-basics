import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js'
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA.js'
import FragmentDemo from './components/Fragmentdemo.js'
import ParentComponent from './components/ParentComponent.js'
import RefsDemo from './components/RefsDemo.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        
        <RefsDemo/>
       
        {/*<Hello name={this.state.name} />
        <ParentComponent/> 
        <FragmentDemo/>
        <LifecycleA/>
        <Form/>
        <Message/>
        
         <Greet name="Tina" surname="lorem">
          <p>This is a children prop</p>
         </Greet>
         <Greet name="Saroz" surname="ipsum">
          <button>Click</button>
         </Greet>
         <Greet name="Mina" surname="dolor"/>
         <Welcome surname="Amet"/>*/}
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
