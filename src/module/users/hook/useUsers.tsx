
import { useState } from 'react'
import { Users } from '../../../data/usersData'

const useUsers = () => {
    const [users, setUsers] = useState(Users)
    const deleteUser = (id:number) =>{
        setUsers(users.filter(user=>user.id !== id))
    }
  return {
    deleteUser,
    users
  }
  
}

export default useUsers


