import React from 'react'
import logo from "../image/logo3.png";
import { Button, TextField } from '@mui/material';
function Login() {
  return (
    <div className='login-container'>
        <div className="image-container">

<img src={logo} alt="Logo"  className='welcome-logo'/>
        </div>
        <div className="login-box">
      <p>Login to your Account</p>
     
      <TextField id="standard-basic" label="Enter UserName" variant="outlined" />
     
      <TextField id="standard-basic" label="Password"  type="password" variant="outlined" autoComplete='curremt-password' />
      <Button variant="outlined">Login</Button>
    </div>
    </div>
  )
}

export default Login
