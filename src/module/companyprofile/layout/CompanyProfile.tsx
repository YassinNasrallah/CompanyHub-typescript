
import Sidebar from '../../../components/Sidebar'
import Header from '../components/Header'
import CompanySettingsCard from '../components/CompanySettingsCard'
import Navbar from '../../../components/Navbar'
import BottomNavbar from '../../../components/BottomNavbar'

const CompanyProfile = () => {
  return (
    <div className='min-h-screen 
    bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50
    transition-all duration-500'>
        <div className="flex h-screen overflow-hidden">
           <Sidebar />
           <div className="flex flex-col w-full overflow-y-auto">
            <Navbar />
            <main className='pb-5'>
              <Header />
              <CompanySettingsCard />
            </main>
              <BottomNavbar />
           </div>
        </div>
    </div>
  )
}

export default CompanyProfile
