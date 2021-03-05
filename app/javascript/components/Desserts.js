import React from "react";


const Desserts = (props) => {
  const {desserts} = props

  // const renderDesserts = () => {
  //   return desserts.map((dessert) => dessert)
  // }
  
  return(
    <div>
      <h1>Desserts Component</h1>
      {/* {renderDesserts()} */}
    </div>
  )
}


export default Desserts;