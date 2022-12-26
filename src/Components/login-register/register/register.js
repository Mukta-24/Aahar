import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();

  const gotologin = () => {
    navigate("/login")
  }

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = e => {

    const { name, value } = e.target
    // console.log(name,value)
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {
      alert("posted")
      axios.post("http://localhost:9002/register", user)
        .then(res => console.log(res))
      navigate("/login")
    } else {
      alert("invalid")
    }

  }

  return (
    <>
      <div>


      </div>
      <div className="register-main">



        <div className='register'>
          {console.log("user", user)}
          <h1>Register</h1>
          {/* <input type="text"name="name" value={user.name} onchange={handleChange} placeholder='Your name' />
        <input type="text"name="email" value={user.email} onchange={handleChange} placeholder='Your Email' />
        <input type="password"name="password" value={user.password} onchange={handleChange} placeholder='Your password' />
        <input type="password"name="reEnterPassword" value={user.reEnterPassword} onchange={handleChange} placeholder='Re-enter Your password' /> */}
          <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='Your name' />
          <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Your Email' />
          <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Your Password' />
          <input type="password" name='reEnterPassword' value={user.reEnterPassword} onChange={handleChange} placeholder='Re-Enter Your name' />
          <div className="button" onClick={register}>Register</div>
          <div>or</div>
          <div className="button" onClick={gotologin}>login</div>
        </div>
      </div>
    </>
  )
}

export default Register
