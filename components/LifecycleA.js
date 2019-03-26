import React, {Component} from 'react'
import LifecycleB from './LifecycleB.js'

class LifecycleA extends Component {
  constructor() {
    super()
    console.log("LifecycleA constructor")
  }

  static getDerivedStateFromProps() {
    console.log("LifecycleA getDerivedStateFromProps")
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount")
  }

  render() {  
    console.log("LifecycleA render")
    return (
      <div>
          Lifecycle A - Component Mounting methods
          <LifecycleB/>
      </div>
    )
    
  }
}

export default LifecycleA;