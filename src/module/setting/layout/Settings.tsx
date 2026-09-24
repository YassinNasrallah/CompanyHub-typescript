import Sidebar from "../../../components/Sidebar"
import Navbar from "../../../components/Navbar"
import Settingsheader from "../components/Settingsheader"
import Profilesetting from "../components/Profilesetting"
import Securitysetting from "../components/Securitysetting"
import BottomNavbar from "../../../components/BottomNavbar"

const Settings = () => {
  return (

        <div className='min-h-screen w-full bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50
        transition-all duration-500'>
            
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
             <div className="flex flex-col flex-1 gap-7 overflow-y-auto">
              <Navbar />
              <main className='flex flex-col gap-7 pb-20 md:pb-0'>
                 <Settingsheader />
                 <div className="mx-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center ">
                  <Profilesetting />
                  <Securitysetting />
                 </div>
              </main>
                 <BottomNavbar />
             </div>
             
        </div>
    </div>
  
  )
}

export default Settings
