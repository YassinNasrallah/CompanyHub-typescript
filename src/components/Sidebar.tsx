
import useSidebar from "../hook/useSidebar"
import { Link } from "react-router-dom"
import { Building2,ArrowLeft ,Settings, House, BriefcaseBusinessIcon, Users  } from "lucide-react"
const Sidebar = () => {
  const {open, togleSidebar} = useSidebar()
  return (
    <div className={`${open?'w-60': 'w-20' } h-screen transition-all duration-300 ease-in-out bg-blue-950 dark:bg-slate-950/80 
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col fixed top-0 left-0 md:relative`}>
     <div className=" p-6  dark:border-slate-700/50">
     
      {/*logo*/}
        <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
          <Building2 size={60} color="white"/>
        </div>
        <div>
          <h2 className={`${!open && 'hidden'} text-xl font-bold text-slate text-white`}>CompanyHub</h2>
        </div>
     </div>

    {/*navigation*/}
     <nav className="inline-flex flex-col mt-10 gap-3">
          <Link to="/" className=" rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
             <House size={30} />
             <h2  className={`${!open && 'hidden'} font-medium text-slate-100`}>Overview</h2>
          </Link>

          <Link to='/Compagnyprofile' className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <BriefcaseBusinessIcon size={30} />
             <h2 className={`${!open && 'hidden'} font-medium text-slate-100`}>Company Profile</h2>
          </Link>

          <div className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <Users size={30} />
             <a href="http://" className={`${!open && 'hidden'} font-medium text-slate-100`}>users</a>
          </div>

          <div className="rounded-sm hover:bg-blue-600 transition hover:text-white px-2 py-2.5 flex gap-4 text-white items-center">
            <Settings size={30} />
             <a href="http://" className={`${!open && 'hidden'} font-medium text-slate-100`}>users</a>
          </div>
       </nav>

        {/*sidebarButton */}
         <button onClick={togleSidebar} 
         className="absolute bg-white text-blue-950 text-3xl rounded-full  -right-3 top-9 border border-blue-950 cursor-pointer">
            <ArrowLeft className={`${!open && 'rotate-180'}`}/>
        </button>
     </div>
    </div>
  )
}

export default Sidebar
