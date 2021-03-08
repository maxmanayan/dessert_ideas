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



  const updateDessert = async (updatedObj, id) => {
    try {
      let res = await axios.put(`/desserts/${id}`, {...updatedObj})

      let newDessertArr = desserts.map((dessert) => dessert.id !== id ? dessert : res.data)

      setDesserts(newDessertArr)
    } catch(err) {
        console.log(err)
    }
  }

  const likeDessert = async (updatedObj, id) => {
    try {
      let addToLikes = updatedObj.likes += 1

      let res = await axios.put(`/desserts/${id}/likes`, {...updatedObj})

      let newDessertArr = desserts.map((dessert) => dessert.id !== id ? dessert : res.data)

      setDesserts(newDessertArr)
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <div className="body">
      <h1 className="body-header">Desserts 🍰</h1> 
      <div className="main-content">
        <div>
          <div className="main-content-form">
            <DessertForm createDessert={createDessert}/>
          </div>
        </div>
        <Desserts desserts={desserts} deleteDessert={deleteDessert} updateDessert={updateDessert} likeDessert={likeDessert}/>
      </div>
    </div>
  )
}



export default App;