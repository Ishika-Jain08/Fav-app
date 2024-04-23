import React from "react";
import { useState } from "react";


const Clock =()=>{

let newTime=new Date().toLocaleTimeString();
const [currTime,setCtime]=useState(newTime);

 const UpdateTime=()=>{
     newTime=new Date().toLocaleTimeString();
     setCtime(newTime);
    }

 setInterval(UpdateTime,1000);

    return(
        <>
         
            <h1>{currTime}</h1>
        
        </>
    )
}

export default Clock;