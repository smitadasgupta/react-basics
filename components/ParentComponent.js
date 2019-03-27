import React, {Component} from 'react'
import PureComp from './PureComponent'
import RegulerComp from './RegulerComponent'
import MemoComp from './MemoComp'

class ParentComponent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Smita'
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'Smita'
      })
    },10000)
  }
  


  render() {
     console.log("***************Parent Component Render *****************")
    return (
      <div>
          Parent Component
          <MemoComp name={this.state.name}/>
          {/*PureComp name={this.state.name}*/}
          {/*RegulerComp name={this.state.name}*/}
      </div>
    )
    
  }
}

export default ParentComponent;