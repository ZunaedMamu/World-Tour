import { useState } from 'react';
import './country.css'
export default function SingularCountry({country}){
       const {name,flags,population,area,cca3} = country;
        const [visited, setVisited]= useState(false);
        const handleVisited =()=>{
            
            setVisited(true);
        }


    return (
       <div className={`country ${visited && 'visited'}`} style={{border:"2px solid purple", padding:"10px" }}>
               <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"5px"}}>
              <h2> {name?.common}</h2>
              <img src={flags?.png} alt="" style={{border:"5px solid black",width:"80%", height:"120px"}}/>
            </div>    
             
             <div style={{marginLeft:"40px"}}>   
                <p>Population: {population}</p>            
                <p>Area: {area}</p>            
                <p><small>Code: {cca3}</small></p> 
                <button onClick={handleVisited} className="btn">Visited</button>   
                {/* <p>{visited && '>>I am visited this country'}   */}
                <p>{visited ?'>>I am visited this country<<' :'>>I Want to visit there<<'}  
                </p>             
             </div>
            
        </div>
    );
};

