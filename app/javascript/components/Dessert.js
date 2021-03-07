import React from "react";
import DessertForm from "./DessertForm";



const Dessert = (props) => {
  const {id, flavor, variety, topping, likes, deleteDessert, updateDessert, likeDessert} = props

  return(
    <div className="dessert-container">
      <h1>Here's an Idea!</h1>
      <p>ID: {id}</p>
      <p>a {flavor} {variety} -- topped with {topping}</p>
      {/* <p>Variety: {variety}</p> */}
      {/* <p>Topping: {topping}</p> */}
      <div>
        <p>Likes: {likes}</p>
        <button onClick={()=>likeDessert({flavor, variety, topping,likes}, id)}>Like</button>
      </div>

      <button onClick={()=>deleteDessert(id)}>Delete</button>
      <button>Edit</button>

      <DessertForm updateDessert={updateDessert} id={id} flavor={flavor} variety={variety} topping={topping}/>
    </div>
  )
}


export default Dessert;