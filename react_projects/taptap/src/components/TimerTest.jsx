import {useState,useEffect} from 'react'

export const TimerTest = ()=>{
    const [count,setCount] =useState(0);
    useEffect(() => { console.log("Component mounted");}, []);
    
    return(
        <div>
            <h1>The current value of count is {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>


        </div>
        
        
        
    )


}

