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
import FocusInput from './components/FocusInput.js'
import PortalDemo from './components/PortalDemo.js'
import ClickCounter from './components/ClickCounter.js'
import HoverCounter from './components/HoverCounter.js'
import ComponentC from './components/ComponentC.js'
import {UserProvider} from './components/UserContext.js'
import PostList from './components/PostList.js'

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
      <PostList/>
      
        {/*
        <UserProvider value="Smita">
        <ComponentC/>
      </UserProvider>
        <ClickCounter name="Smita"/>
        <HoverCounter name="Ishanvi"/>
        <PortalDemo/>
        <Hello name={this.state.name} />
        <FocusInput/>
        <RefsDemo/>
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
