import React, {useState, useEffect} from "react";
import Desserts from "./Desserts"
import axios from "axios";
import DessertForm from "./DessertForm"

// R - Need to be able to read array of desserts
// C - Need to be able to create a new dessert from dessertForm... and add to array and db
// D - (FE- User should click delete button and form should disappear) + (BE- Once user clicks delete button, dessert should be deleted from db based on ID)

// Make Likes Component functional


const App = () => {
  const [desserts, setDesserts] = useState([])

  const getDesserts = async () => {
    try {
      let res = await axios.get("/desserts")
      console.log(res.data)
      setDesserts(res.data)
    } catch(err) {
        console.log(err)
    }
  }
  
  useEffect(()=>{
    getDesserts()
  },[])

  const createDessert = async (newDessert) => {
    try {
      let res = await axios.post("/desserts", {...newDessert})
      console.log(res)
      let newDessertsArray = [...desserts, res.data]
      setDesserts(newDessertsArray)
    } catch(err){
        console.log(err)
    }
  }
  

  const deleteDessert = async (id) => {
    try {
      console.log(id)
      let res = await axios.delete(`/desserts/${id}`)
      let newDessertsArray = desserts.filter(dessert => dessert.id !== id ? dessert : res.data)
      setDesserts(newDessertsArray)
    } catch(err) {
        console.log(err)
    }
  }



  const updateDessert = async (id) => {
    try {
      console.log(id)
    } catch(err) {
        console.log(err)
    }
  }



  return(
    <div>
      <h1>App Page</h1> 
      <DessertForm createDessert={createDessert}/>
      <Desserts desserts={desserts} deleteDessert={deleteDessert} updateDessert={updateDessert}/>
    </div>
  )
}



export default App;