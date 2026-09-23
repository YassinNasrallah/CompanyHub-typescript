import UsersHeader from '../components/UsersHeader'
import Sidebar from '../../../components/Sidebar'
import Navbar from '../../../components/Navbar'
import BottomNavbar from '../../../components/BottomNavbar'
import Userstable from '../components/Userstable'
const Users = () => {
  return (
    <div className='min-h-screen 
       bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50
    transition-all duration-500'>
        <div className="flex h-screen overflow-hidden">
           <Sidebar />
           <div className="flex flex-col w-full overflow-y-auto">
            <Navbar />
            <main className='pb-30'>
            <UsersHeader />
            <Userstable />
            </main>
            <BottomNavbar />
           </div>
        </div>
    </div>
  )
}

export default Users
