import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      topic: "React"
    }
  }
  handleOnChange= (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleOnTopicChange= (e) => {
    this.setState({
      topic: e.target.value
    })
  }

  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.topic}`)
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username}
          onChange= {this.handleOnChange}/>
          <br/>
          <label>Topic:</label>
          <select value={this.state.topic} onChange= {this.handleOnTopicChange}>
            <option value="React">React</option>
            <option value="ES6">ES6</option>
            <option value="TS">TypeScript</option>
          </select>

          <button type="submit">Submit</button>
      </form>
    )
    
  }
}

export default Form;