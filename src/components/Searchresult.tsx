import React from 'react'
import type { user } from '../interface/UsersInterface'
type resultProps = {
  users:user[]
}

const Searchresult = ({users}:resultProps) => {
  return (
    <div>
        {users.map((user)=>{
            return(
            <div key={user.id}>
            <h1>{user.email}</h1>
            </div>
            )
        })}
      
    </div>
  )
}

export default Searchresult
