import React, {useState, useEffect} from "react";
import Desserts from "./Desserts"
import axios from "axios";
import DessertForm from "./DessertForm"

// R - Need to be able to read array of desserts
// C - Need to be able to create a new dessert from dessertForm... and add to array and db


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


  const createDessert = async (newDessert) => {
    try {
      let res = await axios.post("/desserts", {...newDessert})
      console.log(res)
      let newDessertsList = [...desserts, res.data]
      setDesserts(newDessertsList)
    } catch(err){
        console.log(err)
    }
  }
  



  useEffect(()=>{
    getDesserts()
  },[])


  return(
    <div>
      <h1>App Page</h1> 
      <DessertForm createDessert={createDessert}/>
      <Desserts desserts={desserts}/>
    </div>
  )
}



export default App;