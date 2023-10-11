import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Login from '../features/auth/component/Login'

const LoginPage = () => {
  return (
    <Navbar>
      <Login/>
    </Navbar>
  )
}

export default LoginPage