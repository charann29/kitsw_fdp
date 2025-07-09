import React,{useState} from 'react';

export const Color = ()=>{
    const [color,setColor] = useState("Pink");
    return (
    <div>
        <h1>This is my favourite color :{color}
        </h1>
         <button onClick={() => setColor("Red")}>Red</button>
        <button onClick = {()=>setColor("Blue")}>Blue</button>
    </div>
    )
}
