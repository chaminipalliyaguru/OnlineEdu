import React, { createContext, useState } from 'react'
import Header from '../Header'
import InspirationMsg from './InspirationMsg';

export const UserApp = createContext();

function InspirationPage1() {
    const [username, setUserName] = useState("Buddy");
    const [school, setSchool] = useState(" School");
  return (
    <div>
      <Header/>
        <UserApp.Provider value={{username,school}}>
            {/* <p>Welcome {username === "" ? "Clever student" : username}</p> */}
            <p>Your Name: <input type='text' placeholder='Enetr your name'
            onChange={(e)=>
                setUserName(e.target.value)
            }
            ></input></p>
            <p>Your Institute: <input type='text' placeholder='Enetr your institute'
            onChange={(e)=>
                setSchool(e.target.value)
            }
            ></input></p>
            <InspirationMsg/>
        </UserApp.Provider>
        
    </div>
  )
}

export default InspirationPage1
