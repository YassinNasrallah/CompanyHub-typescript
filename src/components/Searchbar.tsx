import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import useQuery from "../hook/useQuery"
import Searchresult from "./Searchresult"
import useUsers from "../hook/useDebouncing"


const Searchbar = () => {
const {search, handlechange} = useQuery()
 const {user} = useUsers(search)
  return (
    <div className="flex flex-col relative">
    <div>
        <Search className="right-0 absolute left-3 -translate-y-1/2 top-1/2 "/>
        <input type="text" value={search} onChange={handlechange} placeholder="Search" className={` rounded-md bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50 w-100 p-2 pl-10 outline-none border border-transparent duration-300 focus:border-gray-300 `}/>
    </div>
    {search.trim()!=='' && (
    <div className="bg-white w-100 h-80 overflow-auto p-5 border flex flex-col gap-5 border-gray-200 rounded-sm absolute top-13">
        <div className="flex justify-between text-black text-sm font-semibold">
           <h1>Users</h1> 
            <Link to='/users' className="text-blue-600 bg-transparent border-none">View All</Link>
        </div>
            <Searchresult users={user?.users ?? []}/>
    </div>
     )}
    </div>
  )
}

export default Searchbar
