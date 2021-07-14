import React,{useEffect, useState} from 'react'

const App = () => {
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    let[curValue,upValue]=useState(0);
    // useEffec is used to display after the render
    useEffect(()=>{
        alert("This Valuse is incremented by one")
    },[curValue])
    let[num,setNum]=useState(0);
    return (
       <>
       <h1>{curValue}</h1>
       <button onClick={()=>{
           upValue(curValue+1);
        //    alert("This value is incremented by one");
       }
        //    ,()=>{
        //     alert("This value is incremented by one");
        //    }
       }>Click-Me 🔼</button>
       <br/>
       <h1>{num}</h1>
       <button onClick={
           ()=>{
               setNum(num-1)
           }
       }>
        Click-Me 🔻
       </button>
       </>
    )
}

export default App
