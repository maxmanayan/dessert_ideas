import React from "react";



const Dessert = (props) => {
  const {id, flavor, variety, topping, likes, deleteDessert} = props

  return(
    <div className="dessert-container">
      <h1>Dessert Component</h1>
      <p>ID: {id}</p>
      <p>Flavor: {flavor}</p>
      <p>Variety: {variety}</p>
      <p>Topping: {topping}</p>
      <p>Likes: {likes}</p>

      <button onClick={()=>deleteDessert(id)}>Delete</button>
      <button>Edit</button>
    </div>
  )
}


export default Dessert;