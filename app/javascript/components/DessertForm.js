import React, {useState} from "react";



const DessertForm = (props) => {
  const {createDessert, updateDessert, id, flavor: defaultFlavor, variety: defaultVariety, topping: defaultTopping} = props
  const [flavor, setFlavor] = useState(defaultFlavor ? defaultFlavor : "")
  const [variety, setVariety] = useState(defaultVariety ? defaultVariety : "")
  const [topping, setTopping] = useState(defaultTopping ? defaultTopping : "")


  const handleSubmit = (e) => {
    e.preventDefault()

    if (id) {
      updateDessert({flavor, variety, topping}, id)
    } else {
        createDessert({flavor, variety, topping, likes: 0})
    }

    setFlavor(defaultFlavor ? flavor : "")
    setVariety(defaultVariety ? variety : "")
    setTopping(defaultTopping ? topping : "")
  }


  return(
    <div className="dessertForm-container">
      <h1>{id ? "Edit Dessert" : "Add Dessert"}</h1>
      <form onSubmit={handleSubmit}>
        <p>Flavor</p>
        <input value={flavor} onChange={(e)=>setFlavor(e.target.value)}/>

        <p>Variety</p>
        <input value={variety} onChange={(e)=>setVariety(e.target.value)}/>

        <p>Topping</p>
        <input value={topping} onChange={(e)=>setTopping(e.target.value)}/>

        <button type="submit">{id ? "update" : "create"}</button>
      </form>
    </div>
  )
}



export default DessertForm;