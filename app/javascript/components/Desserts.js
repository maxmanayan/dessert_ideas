import React from "react";
import Dessert from "./Dessert"


const Desserts = (props) => {
  const {desserts, deleteDessert, updateDessert, likeDessert} = props

  const renderDesserts = () => {
    return desserts.map((dessert) => <Dessert key={dessert.id} {...dessert} deleteDessert={deleteDessert} updateDessert={updateDessert} likeDessert={likeDessert}/>)
  }
  
  return(
    <div className="desserts-container">
      <h1>Desserts Component</h1>
      <div className="desserts-container-contents">
        {renderDesserts()}
      </div>
    </div>
  )
}


export default Desserts;