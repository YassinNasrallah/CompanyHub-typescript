import { useEffect, useState } from 'react'
import type { usersResponce } from '../interface/UsersInterface'
import getUser from '../service/getUser'

const useUsers = (search:string) => {
  const [user, setUser] = useState<usersResponce | undefined>(undefined)
  useEffect(()=>{
    if(search.trim()===''){
        return
    }
    const timer = setTimeout(async()=>{
        const data = await getUser(search)
        setUser(data)      
    },300)
    return()=>{
        clearTimeout(timer)
    }
  },[search])

  return {
    user,
  }
}

export default useUsers
