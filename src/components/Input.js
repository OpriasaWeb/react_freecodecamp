import React from "react";

class Input extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  

  render(){
    return(
      <div>
        <input onChange={this.handleChange} value={this.state.input} />
        <h3>Username:</h3>
        <p>{this.state.input}</p>
      </div>
    )
  }
}

export default Input