import React, { useState } from 'react'

const useCounter = (initailState, num, str) => {

    const [counter, setCounter] = useState(initailState)
  
    const incrementLevel = () =>{
        setCounter((prev) => prev + num)
      }
    
      const decrementLevel = () =>{
        setCounter((prev) =>{
          if(str ==="ok"){
            if(prev > 0) {
              return prev - 2
            }
            return prev
          }
          return prev - num
        })
      }
  

  return {
    counter,
    incrementLevel,
    decrementLevel
  }
}

export default useCounter
