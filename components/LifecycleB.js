import React, {Component} from 'react'

class LifecycleB extends Component {
  constructor() {
    super()
    console.log("LifecycleB constructor")
  }

  static getDerivedStateFromProps(props,state) {
    console.log("LifecycleB getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate")
  }


  render() {  
    console.log("LifecycleB render")
    return (
      <div>
          Lifecycle B - Child Component Update methods
      </div>
    )
    
  }
}

export default LifecycleB;