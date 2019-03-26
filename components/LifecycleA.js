import React, {Component} from 'react'
import LifecycleB from './LifecycleB.js'

class LifecycleA extends Component {
  constructor() {
    super()
    console.log("LifecycleA constructor")
  }

  static getDerivedStateFromProps(props,state) {
    console.log("LifecycleA getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate")
  }

  changeState = () => {
    this.setState({
      name: 'Smita'
    })
  }
  render() {  
    console.log("LifecycleA render")
    return (
      <div>
          Lifecycle A - Component Update methods<br/>
          <button onClick={this.changeState}>Click</button>
          <LifecycleB/>
      </div>
    )
    
  }
}

export default LifecycleA;