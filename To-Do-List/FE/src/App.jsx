import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const[data,setdata]=useState([])
  const fetchdata=()=>{
   axios.get("http://localhost:8080/getproduct")
   .then((res)=>{
    setdata(res.data)
   }).catch((err)=>{
    console.log(err)
   })
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
<div>
  {data.map((el)=><img   src={el.image}  height={400}   width={400} />)}
</div>
  )
}

export default App