import { sidebarItems } from "../interface/SidebarType"
import { NavLink } from "react-router-dom"
const BottomNavbar = () => {
  return (
           <nav className="flex md:hidden justify-around p-1 bg-white  mt-10  h-fit fixed bottom-0 left-0 right-0">
           {sidebarItems.map((item)=>{
             const Icon = item.icon
             return(
              <NavLink key={item.to} to={item.to} className={({isActive})=>
                `flex-col rounded-sm  transition px-2 py-2.5 flex   items-center
                ${isActive? 'text-blue-600' : 'text-gray-500'}`}>
                 <Icon size={30} />
                 <h2 className="text-sm" >{item.title}</h2>
             </NavLink>
             )
           })}
       </nav>
    
  )
}

export default BottomNavbar
