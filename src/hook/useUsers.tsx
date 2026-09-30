import { useEffect, useState } from 'react'
import type { usersResponce } from '../interface/UsersInterface'
import Userapi from '../service/Userapi'

const useUsers = () => {
    const [users, setUsers] = useState<usersResponce | undefined>(undefined)
    const [error, seterror] = useState<Error | null>(null)
    const fetchdata =async()=>{
        try{
            const response = await Userapi()
            if(response === undefined){
                throw new Error('faild to fetch')
            }
            setUsers(response)
        }catch(error){
            console.error(error)
            seterror(error as Error)
        }
    }
      useEffect(()=>{
       const timer =  setTimeout(()=>{
           fetchdata()
        },3000)
        return()=>{
           clearTimeout(timer)
        }
      },[])
    
  
  return {
    fetchdata,
    users,
    error
  }
}

export default useUsers
