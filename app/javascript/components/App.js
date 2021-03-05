import React, {useState, useEffect} from "react";
import Desserts from "./Desserts"
import axios from "axios";

// R - Need to be able to read array of desserts


const App = () => {
  const [desserts, setDesserts] = useState([])

  const [books, setBooks] = useState([])

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


  return(
    <div>
      <h1>App Page</h1> 
      <Desserts desserts={desserts}/>
    </div>
  )
}



export default App;