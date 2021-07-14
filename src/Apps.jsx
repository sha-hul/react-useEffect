import React, { useEffect, useState } from 'react'

const Apps = () => {
    let[curValue,upValue]=useState(0);
    useEffect(()=>{
        return(
            document.title=`you have clicked ${curValue} times`
            ,[curValue]
        )
    })
    return (
        <>
        <h1>{curValue}</h1>
        <button
        onClick={
            ()=>{
                upValue(curValue+1);
            }
        }
        >
            Click 🔼
        </button>
        </>
    )
}
export default Apps
