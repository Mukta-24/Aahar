import React, { useContext, useState } from 'react'
import "./login.css"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
// import AuthContext from '../context/AuthContext'

const Login = () => {

  const navigate = useNavigate();

  const hello = ()=>{
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

  const login =async()=>{
    await axios.post("http://localhost:9002/login",user)
    .then(res=> {
      console.log("login");
      console.log(res.data);
      alert(res.data.message);
      if(res.data.message ==="Login succesfully"){
      // setLoginUser(res.data.user)        
        navigate("/menu")
      }
    })
    
  }
  return (
    <>
    <div>

<nav className="navbar navbar-expand-lg bg-light nav-start">
    <div className="container-fluid title">
        <div className="icon"><img src='images/aahar_logo-removebg-preview.png' /> </div>
        <a className="navbar-brand heading" href="#">AAHAR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-text options">
                <li className="nav-item bo">

                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item bo">
                    <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item bo">
                    <a className="nav-link" href="/menu">Menu</a>
                </li>
                <li className="nav-item bo">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item bo">
                    <a className="nav-link" href="/register">Sign Up</a>
                </li>
                <li className="nav-item bo">
                    <a className="nav-link" href="#"><i className="fa-sharp fa-solid fa-cart-shopping"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
<div className="login-main">
    <div className='login'>
      {console.log(user)}
      <h1>Login</h1>
      <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' />
      <input type="password" name='password' value={user.password} onChange={handleChange}  placeholder='Enter your password' />
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={()=>{hello()}}>Register</div>
    </div>
    </div>
    </>
  )
}

export default Login
