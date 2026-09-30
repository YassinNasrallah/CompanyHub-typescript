import { Search } from "lucide-react"
import { useState, type ChangeEvent } from "react"
import type { user } from "../interface/UsersInterface"
const Searchbar = ({data}:{data:user[]}) => {
    
    const [search, setsearch] = useState<string>('')
    const handlechange = (event:ChangeEvent<HTMLInputElement>)=>{
        setsearch(event.target.value)
    }

    
   const filterdata =(users:user[])=>{
     return users.filter((user)=>user.email.toLowerCase().includes(search.toLowerCase()))
     
   }
   const filtreddata = filterdata(data)
   console.log(filtreddata)

  return (
    <div className="flex flex-col relative">
    <div>
           <Search className="right-0 absolute left-3 -translate-y-1/2 top-1/2 "/>
            <input type="text" value={search} onChange={handlechange} placeholder="Search" className={` rounded-md bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50 w-100 p-2 pl-10 outline-none border border-transparent duration-300 focus:border-gray-300 `}/>
    </div>
    {search.trim()!=='' && (
    <div className="bg-white w-100 h-80 overflow-auto p-5 border flex flex-col gap-5 border-gray-500 absolute top-13">
        {filtreddata.map((user)=>(
            <div className="" key={user.id}>
                <h1 className="text-black">{user.username}</h1>
            </div> 
        ))}
    </div>
     )}
    </div>
  )
}

export default Searchbar
