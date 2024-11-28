import React from 'react'
import Header from './Header'

function SignIn() {
  return (
    <div>
    <Header/>
    <h1>Sign Up</h1><br/>
    <p>User Name: </p>
    <input type='text'></input>
      <p>Email: </p>
      <input type='text'></input>
      <p>Password:</p>
      <input type='password'></input>
      <p>Confim Password:</p>
      <input type='password'></input>
    </div>
  )
}

export default SignIn
