import React from "react";

class FullName extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: 'freeCodeCamp',
      counter: 0,
      toggle: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
  }

  handleChange(event){
    const value = event.target.value
    this.setState({name: value})
  }

  handleClick(){
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  toggleClick(){
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      }
    })
  }

  render(){
    // declare variable is allowed here, written in plain js
    const { name } = this.state
    const { counter } = this.state
    if(this.state.toggle){
      return(
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter your name"
            value={name}
          />
          <h1>Hello, {name}</h1>
  
  
          <button
            onClick={this.handleClick}
          >Increment count</button>
          <p>Counter value: {counter}</p>
  
          <h1>Use state to toggle elements</h1>
          <button onClick={this.toggleClick}>Toggle text</button>
        </div>
      )
    }
    else{
      return(
        <div>
          <h1>Use state to toggle elements</h1>
          <button onClick={this.toggleClick}>Toggle text</button>
        </div>
      )
    }
    
  }

}

export default FullName