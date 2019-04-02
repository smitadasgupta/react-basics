import React,{Component} from 'react'
import CounterHOC from './CounterHOC'

class HoverCounter extends Component {
  
 
  render() {
     const {count,increaseCount} = this.props
    return(
      <div>
        <h1 onMouseOver={increaseCount}>{this.props.name} Hovered {count} times</h1>
      </div>
    )
  }
}

export default CounterHOC(HoverCounter);