import React from "react";

class OnlyEvens extends React.Component{
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Should I update?")
    if(nextProps.value % 2 === 0){
      return true
    }
    return false
  }

  componentDidUpdate(){
    console.log("Component re-render")
  }

  render(){
    return(
      <div>
        <h1 style={{color: 'red', fontSize: "5rem"}} >{this.props.value}</h1>
      </div>
    )
  }
}

export default OnlyEvens