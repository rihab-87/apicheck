import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Navbaruser from "./Navbaruser";

import UserList from "./UserList";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
 
.then(res=>{setData(res.data); console.log(res.data)})
.catch(err=>{setError(err); console.log(error)})
},[])


  return (
    <div className="App">
      <Navbaruser/>
   <UserList data={data}/>
    </div>
  );
}

export default App;
