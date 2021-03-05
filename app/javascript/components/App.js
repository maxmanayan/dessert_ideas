import React, {useState, useEffect} from "react";
import Desserts from "./Desserts"

// R - Need to be able to read array of desserts


const App = () => {
  const [desserts, setDesserts] = useState([])





  return(
    <div>
      <h1>App Page</h1> 
      <Desserts />
    </div>
  )
}



export default App;