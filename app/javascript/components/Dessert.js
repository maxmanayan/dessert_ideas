import React from "react";
import DessertForm from "./DessertForm";



const Dessert = (props) => {
  const {id, flavor, variety, topping, likes, deleteDessert, updateDessert, likeDessert} = props

  return(
    <div className="dessert-container">
      <h1>Here's an Idea!</h1>
      {/* <p>ID: {id}</p> */}
      <h2 className="dessert-container-idea">a {flavor} {variety} topped with {topping}</h2>
      <div className="likes-container">
        <h3>Likes: {likes}</h3>
        <button onClick={()=>likeDessert({flavor, variety, topping,likes}, id)}>Like</button>
      </div>

      <button onClick={()=>deleteDessert(id)}>Delete</button>

      <DessertForm updateDessert={updateDessert} id={id} flavor={flavor} variety={variety} topping={topping}/>
    </div>
  )
}


export default Dessert;