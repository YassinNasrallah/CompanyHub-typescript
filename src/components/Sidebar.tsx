import { Building2, Settings } from "lucide-react"
import { House } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" transition duration-300 ease-in-out bg-blue-950 dark:bg-slate-950/80 
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
     <div className=" p-6  dark:border-slate-700/50">
       <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
          <Building2 size={60} color="white"/>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate text-white">CompanyHub</h2>
        </div>
       </div>


       {/*navigation*/}
       <nav className="flex flex-col mt-10 gap-3">
          <div className=" rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <House size={30} />
             <Link to="/" className=" font-medium text-slate-100">Overview</Link>
          </div>

          <div className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <BriefcaseBusiness size={30} />
             <Link to="/Compagnyprofile" className=" font-medium text-slate-100">Company Profile</Link>
          </div>

          <div className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <Users size={30} />
             <a href="http://" className=" font-medium text-slate-100">users</a>
          </div>

          <div className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <Settings size={30} />
             <a href="http://" className=" font-medium text-slate-100">users</a>
          </div>
       </nav>
        
     </div>
    </div>
  )
}

export default Sidebar
