
import BottomNavbar from '../../../components/BottomNavbar'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import CompanyProfilecard from '../components/CompanyProfilecard'
import CompanyRecentActivity from '../components/CompanyRecentActivity'
import OverviewCards from '../components/OverviewCards'
import OverviewHeader from '../components/OverviewHeader'

const Dashboard = () => {
  return (
    <div className='min-h-screen w-full bg-linear-to-br from-slate-100 via-blue-50 to-indigo-50
     transition-all duration-500'>
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
             <div className="flex flex-col flex-1 gap-7 overflow-y-auto">
              <Navbar />
              
              <main className='flex flex-col gap-7 pb-20 md:pb-0'>
                 <OverviewHeader />
                 <OverviewCards />
                 <div className="m-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center ">
                  <CompanyProfilecard />
                  <CompanyRecentActivity />
                 </div>
              </main>

                 <BottomNavbar />
             </div>
             
        </div>
    </div>
  )
}

export default Dashboard
