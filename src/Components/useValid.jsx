import  { useState } from 'react'

const useValid = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailValue, setEmailValue] = useState(undefined)
  const [passwordValue, setPasswordValue] = useState(undefined)

  const getValue = (el) =>{
      setEmail(el.target.value)
      setEmailValue(email.includes("@"))
  }

  const getPassword = (el) =>{
      setPassword(el.target.value)
      setPasswordValue(password.length > 5)
  }
  return {
    getValue,
    getPassword,
    emailValue,
    passwordValue,
  }
}

export default useValid
