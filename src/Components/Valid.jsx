import React, { useReducer, useState } from 'react'
import useValid from './useValid'
import "./Valid.css"


const Valid = () => {

   const {getPassword,getValue,emailValue,passwordValue}= useValid()



  return (
    <div style={{marginBottom: "50px"}}>

        <input className='two' style={{border: emailValue === false  ? "1px solid red" : "1px solid black", outline:"none"}}
        onChange={getValue}
        type="email" 
        placeholder="Eamil" 
        />

        <input style={{border: passwordValue === false  ? "1px solid red" : "1px solid black", outline:"none"}}
        onChange={getPassword}
        type="password" 
        placeholder="Password" 
        />


    </div>
  )
}

export default Valid
