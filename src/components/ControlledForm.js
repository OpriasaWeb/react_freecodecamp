import React from "react";

class ControlledForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      input: '',
      submit: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event){
    // prevent natural refresh of website
    event.preventDefault()

    this.setState({
      submit: this.state.input,
      input: ''
    })
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input} placeholder="Enter your username" />
          <button type="submit" >Submit</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    )
  }
}

export default ControlledForm