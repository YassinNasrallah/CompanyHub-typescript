import { Search, Bell,Menu, CircleUserRound, Building2 } from "lucide-react"
import useMenu from "../hook/useMenu"
const Navbar = () => {
  const { handlClick} = useMenu()
  return (
    <div className="flex justify-between item-center relative bg-white p-4 ">
      <div className=" gap-4 justify-center items-center flex lg:hidden md:hidden relative">
          <Menu onClick={handlClick} size={35} className="cursor-pointer"/>
        <div className="flex items-center gap-2">
          <Building2 size={35}/>
          <h1 className="text-black text-xl font-bold">CompanyHub</h1>
        </div>
      </div>
           
        <div className="hidden lg:flex md:flex relative w-100 ">
           <Search className="absolute left-3 -translate-y-1/2 top-1/2 text-slate-500"/>
           <input type="text" placeholder="Saerch" className="rounded-md bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50 w-full p-2 pl-10 outline-none border border-transparent duration-300 focus:border-gray-300 "/>
        </div>

        <div className="flex items-center gap-2 mr-5">
               <Bell size={25} className="text-gray-800"/>
            <div className="flex gap-3  items-center">
               <CircleUserRound className="text-gray-800" size={30}/>
               <h2 className="text-gray-800 hidden lg:flex ">Yassin Nasrallah</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
