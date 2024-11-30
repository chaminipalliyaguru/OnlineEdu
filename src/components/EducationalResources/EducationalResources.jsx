// import React, { useEffect, useState } from 'react'
// // import { Button } from "@material-tailwind/react";
// import Header from '../Header';
// import axios from 'axios';


// function EducationalResources() {
//   const [users,setUsers] =useState([])
  
//   useEffect(() => {
//     axios.get('http://localhost:3001/getUsers')
//     .then(users => setUsers(users.data))
//     .catch(err => console.log(err))
//   },[])

//   return (
//     <div>
//       <Header/>
//         {users.length > 0 ? (
//           <table border="1" style={{ width: '50%', margin: 'auto', textAlign: 'left' }}>
//           <thead>
//               <tr>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Email</th>
//               </tr>
//           </thead>
//           <tbody>
//             {users.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.email}</td>
//               </tr>
//             ))}
//             </tbody>
//                 </table>
//             ) : (
//                 <p style={{ textAlign: 'center' }}>No data available</p>
//             )}
        
//     </div>
//   )
// }

// export default EducationalResources

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Header from '../Header';

// function EducationalResources() {
// const [a, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/getUsers')
//     .then(response => setData(response.a))
//     .catch(err => console.log(err))
//   },[])

//   return (
//     <div>
//       <Header/>
//         {a.map((item,index)=>
//           <div key={index}>
//           <p>{item.name}</p>
//           <p>{item.email}</p>
//           <p>{item.age}</p>
//           </div>

//         )}
//     </div>
//   )
// }

// export default EducationalResources


import axios from 'axios'
// import { response } from 'express'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Header'

function EducationalResources() {
const [data, setData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:3001/getUsers')
  .then(response => setData(response.data))
},[]);

  return (
    <div>
      <Header/>
      {data.map((item, index) =>
        <div key ={index}>
            <p>{item.name}</p>
            <p>{item.age}</p>
          </div>
      ) }
    </div>
  )
}

export default EducationalResources
