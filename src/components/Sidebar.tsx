
import { sidebarItems } from "../interface/SidebarType"
import { NavLink } from "react-router-dom"
import { Building2 } from "lucide-react"
const Sidebar = () => {  
  return (
    <div className={`hidden md:flex lg:flex h-screen transition-all duration-300 ease-in-out bg-blue-950
    backdrop-blur-xl border-r border-slate-200/50   flex-col fixed top-0 left-0 md:relative`}>
     <div className="p-6">
     
      {/*logo*/}
        <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
          <Building2 size={60} color="white"/>
        </div>
        <div>
          <h2 className={` text-xl font-bold text-slate text-white`}>CompanyHub</h2>
        </div>
     </div>

    {/*navigation*/}
    <aside>
     <nav className=" md:inline-flex flex-col mt-10 gap-3">
           {sidebarItems.map((item)=>{
             const Icon = item.icon
             return(
              <NavLink key={item.to} to={item.to} className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
                 <Icon size={35} />
                 <h2 className={` font-medium text-slate-100`}>{item.title}</h2>
             </NavLink>
             )
           })}
       </nav>
      </aside>
     </div>
    </div>
  )
}

export default Sidebar
