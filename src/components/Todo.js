// Class component
import React from "react";
import List from "./ArrayPropsComponent/List";

class Todo extends React.Component{
  render(){
    return(
      <div>
        <h1>Passing an array props</h1>
        <h3>Tasks today:</h3>
        <List tasks={["McMorning", "Mathematics"]} />
        <h3>Tasks tomorrow:</h3>
        <List tasks={["McMorning", "Mathematics", "React fCC"]} />
      </div>
    )
  }
}

export default Todo