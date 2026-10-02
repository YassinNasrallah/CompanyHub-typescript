import { useState, type ChangeEvent } from "react"

const useQuery = () => {
     const [search, setsearch] = useState<string>('')
    const handlechange = (event:ChangeEvent<HTMLInputElement>)=>{
        setsearch(event.target.value)
    }
  return {
    search,
    handlechange
  }
}

export default useQuery
