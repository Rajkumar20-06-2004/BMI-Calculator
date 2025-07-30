import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {
  const[Height,setHeight]=useState(180);
  const[Weight,setWeight]=useState(70);
  function onWeightChange(event){
    setWeight(event.target.value)

  }
  function onHeightChange(event){
    setHeight(event.target.value)

  }
  const output= useMemo(()=>{
    const calculateHeight=Height/100;
    return(Weight/(calculateHeight*calculateHeight)).toFixed(1)

  },[Weight,Height]);
  

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slioder-output'>Weight :{Weight}</p>

        <input className='input-slider' type='range' step="1" min="40" max="200"
         onChange={onWeightChange}/>
        
        <p className='slider-output'>Height:{Height}cm</p>
        <input className='input-slider' type='range'  onChange={onHeightChange} min="140" max="220"/>

      </div>
      <div className='output-section'>
        <p>YOUR BMI IS</p>
        <p className='output'>{output}</p>
        

      </div>
    </main>
  )
}

export default App