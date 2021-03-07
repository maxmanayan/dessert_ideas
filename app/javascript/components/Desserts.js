import React from "react";
import Dessert from "./Dessert"


const Desserts = (props) => {
  const {desserts, deleteDessert, updateDessert, likeDessert} = props

  const renderDesserts = () => {
    return desserts.map((dessert) => <Dessert key={dessert.id} {...dessert} deleteDessert={deleteDessert} updateDessert={updateDessert} likeDessert={likeDessert}/>)
  }
  
  return(
    <div>
      <h1>Desserts Component</h1>
      {renderDesserts()}
    </div>
  )
}


export default Desserts;