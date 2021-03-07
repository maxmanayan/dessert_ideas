import React, {useState} from "react";



const DessertForm = (props) => {
  const {createDessert} = props
  const [flavor, setFlavor] = useState("")
  const [variety, setVariety] = useState("")
  const [topping, setTopping] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    createDessert({flavor, variety, topping, likes: 0})

    setFlavor("")
    setVariety("")
    setTopping("")
  }


  return(
    <div className="dessertForm-container">
      <h1>DessertForm Component</h1>
      <form onSubmit={handleSubmit}>
        <p>Flavor</p>
        <input value={flavor} onChange={(e)=>setFlavor(e.target.value)}/>

        <p>Variety</p>
        <input value={variety} onChange={(e)=>setVariety(e.target.value)}/>

        <p>Topping</p>
        <input value={topping} onChange={(e)=>setTopping(e.target.value)}/>

        <button type="submit">add</button>
      </form>
    </div>
  )
}



export default DessertForm;