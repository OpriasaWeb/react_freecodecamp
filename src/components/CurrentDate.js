import React from 'react'
import DateToday from './PassPropsComponents/DateToday'

class CurrentDate extends React.Component{
  // This to call the parent component in React.Component
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <div>
        <h2>What date is it?</h2>
        <DateToday date={Date()} />
      </div>
    )
  }
}

export default CurrentDate