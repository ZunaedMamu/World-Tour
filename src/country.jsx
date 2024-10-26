import { useEffect } from "react";
import { useState } from "react"
import SingularCountry from "./singular-country";
import './country.css'

export default function Country(){
    const [countries, setCountries]= useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
},[])
  
   return(
     <div>
       <div style={{display:"flex", gap:"5px",marginRight:"10px",justifyContent:"flex-end"}}>
       <input type="text" style={{width:"350px", backgroundColor:"white", color:"black", borderRadius:"8px", padding:"5px"}}/>
       <button style={{backgroundColor:"purple", color:"white"}}>Search</button>
       </div>
       <hr />
       <h3>Total Country: {countries.length}</h3>
       <hr />
       <div className="con">
       <div className="box">
       {
          countries.map(c => <SingularCountry country={c} key={c.cca2}/>)
       }

       </div>
       </div>
     </div>   
    )
}