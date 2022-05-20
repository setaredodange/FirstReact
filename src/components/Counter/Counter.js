import {useState} from 'react';
import "./Counter.css";
import Button from "../Button"


const Counter=()=> {
const[count,setCount]=useState(0);
    return(
        <div className="counter">
            <Button content="-" Color="yellow"   
            onClick={()=>setCount(count-1)}/>

         <span className="count">{count}</span> 

             <Button content="+" Color="violet"  
             onClick={()=>setCount(count+1)}/>

        </div>
    );
};
export default Counter;