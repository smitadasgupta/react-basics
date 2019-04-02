import React from 'react'

const CounterHOC = OriginalComponent => {
  class NewComponent extends React.Component{
      constructor(props){
      super(props)

      this.state = {
      count: 0
    }

    }
    increaseCount = () => {
      this.setState(prevState => {
        return{
          count: prevState.count + 1
        }
      })
    }
    
    render(){
      return <OriginalComponent count={this.state.count} increaseCount={this.increaseCount} {...this.props}/>
    }
  }
  return NewComponent
}


export default CounterHOC;