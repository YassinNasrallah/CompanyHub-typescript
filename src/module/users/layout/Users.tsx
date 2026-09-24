import UsersHeader from '../components/UsersHeader'
import Sidebar from '../../../components/Sidebar'
import Navbar from '../../../components/Navbar'
import BottomNavbar from '../../../components/BottomNavbar'
import Userstable from '../components/Userstable'
import Addusercard from '../components/Addusercard'
import { useState } from 'react'
const Users = () => {

    const [isaddUsersopen, setIsaddUsersopen] = useState<boolean>(false)

  return (
    <div className='min-h-screen 
       bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50
    transition-all duration-500'>
        <div className="flex h-screen overflow-hidden">
           <Sidebar />
           <div className="flex flex-col w-full overflow-y-auto">
            <Navbar />
            <main className='pb-30 relative'>
            <UsersHeader onAdduser={()=>setIsaddUsersopen(true)}/>
            <Userstable />
             {isaddUsersopen && (
               <div className="fixed z-50 inset-0 bg-black/50 flex justify-center items-center backdrop-blur-md">
                   <Addusercard onClose={()=>setIsaddUsersopen(false)}/> 
               </div>
             )}
            
            </main>
            <BottomNavbar />
           </div>
        </div>
    </div>
  )
}

export default Users
