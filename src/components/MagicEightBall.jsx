import React from "react";

const inputStyle = {
  width: 235,
  margin: 5,
};

const buttonStyle = {
  cursor: 'pointer'
}

class MagicEightBall extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      userInput: '',
      randomIndex: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.ask = this.ask.bind(this)

  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    })
  }

  ask(){
    if(this.state.userInput){
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      })
    }
  }

  render(){
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];

    let answer = possibleAnswers[this.state.randomIndex]

    return(
      <div>
        <h1>Magic Eight Ball</h1>
        <input type="text" style={inputStyle} value={this.state.userInput} onChange={this.handleChange} />
        <button onClick={this.ask} style={buttonStyle}>Submit</button>
        <div>
          <h4>Answer:</h4>
          <p>{answer}</p>
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}

export default MagicEightBall