import React, {Component} from 'react'

class LifecycleB extends Component {
  constructor() {
    super()
    console.log("LifecycleB constructor")
  }

  static getDerivedStateFromProps(props,state) {
    console.log("LifecycleB getDerivedStateFromProps")
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount")
  }

  render() {  
    console.log("LifecycleB render")
    return (
      <div>
          Lifecycle B - Child Component Mounting methods
      </div>
    )
    
  }
}

export default LifecycleB;