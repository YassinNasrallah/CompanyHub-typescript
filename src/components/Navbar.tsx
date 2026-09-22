import { Search, CircleUserRound, Building2, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false)

  const handlClick = () =>{
    setOpenSearchbar(prev => !prev) 
  }
  
  return (
    <div className="flex justify-between item-center relative bg-white p-4 ">
      <div className={`${openSearchbar? 'hidden' : 'flex' } gap-4 justify-center items-center lg:hidden md:hidden relative`}>
        <div className="flex items-center gap-2">
          <Building2 size={35}/>
          <h1 className="text-black text-xl font-bold">CompanyHub</h1>
        </div>
      </div>

      <div className={`${openSearchbar? 'flex' : 'hidden'} md:flex relative w-100 `}>
            <Search className="right-0 absolute left-3 -translate-y-1/2 top-1/2 "/>
            <input autoFocus={openSearchbar} type="text" placeholder="Search" className={` rounded-md bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50 w-full p-2 pl-10 outline-none border border-transparent duration-300 focus:border-gray-300 `}/>
      </div>
      
      <div className="flex gap-3 items-center px-4">
            <button className="block md:hidden cursor-pointer" onClick={handlClick}>
            {openSearchbar? <X /> : <Search />}
            </button>
              <CircleUserRound className={`${openSearchbar? 'hidden' : 'flex'} text-gray-800`} size={30}/>
              <h2 className="text-gray-800 hidden lg:flex ">Yassin Nasrallah</h2>
           </div>                
      </div>
  )
}

export default Navbar
