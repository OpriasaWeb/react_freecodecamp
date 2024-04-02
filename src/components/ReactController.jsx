import React from "react";
import OnlyEvens from "./LifeCycles/ShouldComponentUpdate";

class ReactController extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      value: 0
    }

    this.addValue = this.addValue.bind(this)
  }

  addValue(){
    this.setState(state => ({
      value: state.value + 1
    }))
  }

  render(){
    return(
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    )
  }

}

export default ReactController