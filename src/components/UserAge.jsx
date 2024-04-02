import React from "react";
const inputStyle = {
  width: 235,
  margin: 5
};
class CheckUserAge extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      input: '',
      userAge: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value,
      userAge: ''
    })
  }

  submit(){
    this.setState(state => ({
      userAge: state.input
    }))
  }

  render(){
    const buttonOne = <button onClick={this.submit}>Submit!</button>
    const buttonTwo = <p>You may enter</p>
    const buttonThree = <p>You shall not pass</p>
    return(
      <div>
        <h4>Enter your age and continue</h4>
        <input 
          style={inputStyle}
          type="number"
          onChange={this.handleChange}
          value={this.state.input}
        />

        {
          this.state.userAge === '' ? buttonOne
          : this.state.userAge < 18 ? buttonTwo
          : buttonThree
        }
      </div>
    )
  }
}

export default CheckUserAge