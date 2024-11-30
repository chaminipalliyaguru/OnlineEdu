import React, { useState } from 'react'
import Header from './Header'

function SignIn() {
const [formData, setFormData] = useState({
  name: "",
  email:"",
  age:"",
  password:"",
  cpassword:"",
});

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await fetch('http://localhost:3001/addUsers',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if(response.ok){
      const result = await response.json();
      console.log("Users added successfully:", result);
      alert("User added successfully!");
    }

  } catch(error){
    console.error("Error:",error);
    alert("An error occurred while submitting the form");
  }; 
}


  return (
    <div>
    <Header/>
    <h1>Sign Up</h1><br/>
    <form onSubmit={handleSubmit}>
    <label><p>User Name: </p>
    <input type='text' name='name' value={formData.name} onChange={handleChange}></input></label>
      <label><p>Email: </p>
      <input type='email' name='email' value={formData.email} onChange={handleChange}></input></label>
      <label><p>Age:</p>
      <input type='age' name='age' value={formData.age} onChange={handleChange}></input></label>
      {/* <label><p>Confim Password:</p>
      <input type='password'></input></label> */}
      <label>Password:
        <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
      </label>
      <label>Confirm Password:
        <input type='password' name='cpassword' value={formData.cpassword} onChange={handleChange}/>
      </label>
      <button type='submit'>Submit</button>
      {formData.password === formData.cpassword ? (
        <button type='submit'>Submit</button>
      ):(
        <p style={{ color: "red" }}>Passwords do not match.</p>
      )}
      
      </form>
    </div>
  )
}

export default SignIn
