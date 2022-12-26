import React, { useContext, useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
// import AuthContext from '../context/AuthContext'

const Login = () => {

  const navigate = useNavigate();

  const hello = () => {
    navigate("/register")
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {

    const { name, value } = e.target
    console.log(name, value)
    setUser({
      ...user,
      [name]: value
    })
  }

  // const { getLoggedIn } = useContext(AuthContext);
  //   async function login() {
  //     try {
  //       const { email, password } = user
  //       await axios.post("auth/login",user);
  //       await getLoggedIn();
  //       navigate("/");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  const login = async () => {
    await axios.post("http://localhost:9002/login", user)
      .then(res => {
        console.log("login");
        console.log(res.data);
        alert(res.data.message);
        if (res.data.message === "Login succesfully") {
          // setLoginUser(res.data.user)        
          navigate("/menu")
        }
      })

  }
  return (
    <>

      <div className="login-main">
        <div className='login'>
          {console.log(user)}
          <h1>Login</h1>
          <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' />
          <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter your password' />
          <div className="button" onClick={login}>Login</div>
          <div>or</div>
          <div className="button" onClick={() => { hello() }}>Register</div>
        </div>
      </div>
    </>
  )
}

export default Login
