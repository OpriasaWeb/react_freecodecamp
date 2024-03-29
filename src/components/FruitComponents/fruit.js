import React from "react"
import NonCitrus from "./TypesOfFruits.js/noncitrus"
import Citrus from "./TypesOfFruits.js/citrus"


class Fruits extends React.Component{
  render(){
    return(
      <div>
        <NonCitrus />
        <Citrus />
      </div>
    )
  }
}

export default Fruits