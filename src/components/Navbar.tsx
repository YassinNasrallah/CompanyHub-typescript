import { Search, Bell, CircleUserRound, Building2 } from "lucide-react"
const Navbar = () => {
  return (
    <div className="flex justify-between item-center relative bg-white p-4 ">
      <div className=" gap-4 justify-center items-center flex lg:hidden md:hidden relative">
        
        <div className="flex items-center gap-2">
          <Building2 size={35}/>
          <h1 className="text-black text-xl font-bold">CompanyHub</h1>
        </div>
      </div>
           
        <div className=" relative w-100 ">
           <Search className="right-0 absolute md:left-3 -translate-y-1/2 top-1/2 "/>
           <input type="text" placeholder="Saerch" className="hidden sm:flex rounded-md bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50 w-full p-2 pl-10 outline-none border border-transparent duration-300 focus:border-gray-300 "/>
        </div>

            <div className="flex gap-3  items-center px-4">
               <CircleUserRound className="text-gray-800" size={30}/>
               <h2 className="text-gray-800 hidden lg:flex ">Yassin Nasrallah</h2>
            </div>
                
    </div>
  )
}

export default Navbar
