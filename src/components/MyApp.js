// Pass State as Props to Child Components
import React from "react";

const styles = {
  color: 'purple',
  fontSize: '3rem',
  border: '2px solid purple'
}

class MyApp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: 'CamperBot',
      inputValue: '',
      activeUsers: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      })
    }, 2000)
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h4 style={styles} >Active users: {this.state.activeUsers}</h4>
        <Navbar name={this.state.name} />
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <InputRender input={this.state.inputValue} />
      </div>
    )
  }
}

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Name of the user: {this.props.name}</h1>
      </div>
    )
  }
}

class GetInput extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h4>Get input: </h4>
        <input 
          value={this.props.input} 
          onChange={this.props.handleChange} 
        />
      </div>
    )
  }
}

class InputRender extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h4>Input render</h4>
        <p>{this.props.input}</p>
      </div>
    )
  }
}

export default MyApp