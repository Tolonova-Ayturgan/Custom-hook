import React, { useState } from 'react'
import useCounter from './useCounter'
import "./Counter.css"


const Counter = () => {

    const {counter, incrementLevel, decrementLevel} = useCounter(0, 4, "ok")

  return (
    <div>
      <button onClick={incrementLevel}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrementLevel}>-</button>
    </div>
  )
}

export default Counter
