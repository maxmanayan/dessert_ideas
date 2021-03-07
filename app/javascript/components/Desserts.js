import React from "react";
import Dessert from "./Dessert"


const Desserts = (props) => {
  const {desserts, deleteDessert, updateDessert} = props

  const renderDesserts = () => {
    return desserts.map((dessert) => <Dessert key={dessert.id} {...dessert} deleteDessert={deleteDessert} updateDessert={updateDessert}/>)
  }
  
  return(
    <div>
      <h1>Desserts Component</h1>
      {renderDesserts()}
    </div>
  )
}


export default Desserts;