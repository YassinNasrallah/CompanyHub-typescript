import { Search, CircleUserRound, Building2, X } from "lucide-react"
import { useState } from "react"
import Searchbar from "./Searchbar"



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
            <Searchbar />
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
