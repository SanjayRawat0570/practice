import React from 'react'

// interface User  {
//     name: string,
//     age: number
// }
  interface address  {
    city: string,
    state: string
 }
   interface details {
    email: string,
    phone: number
  }
  interface User extends address,details {
    name: string,
    age: number
  }
 
  function Home ({name , age , address , details}: User) {
    return (
      <div>
        <h1>Home</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{address.city}</h2>
        <h2>{address.state}</h2>
      </div>
  
    )
  }

export default Home