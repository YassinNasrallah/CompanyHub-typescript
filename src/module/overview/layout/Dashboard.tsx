
import Sidebar from '../../../components/Sidebar'
import CompanyProfilecard from '../components/CompanyProfilecard'
import CompanyRecentActivity from '../components/CompanyRecentActivity'
import OverviewCards from '../components/OverviewCards'
import OverviewHeader from '../components/OverviewHeader'

const Dashboard = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50
    dark:from-slate-900 dark:via-slate-00 dark:via-slate-800 transition-all duration-500'>
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
             <div className="flex flex-col flex-1 gap-7 overflow-y-auto ">
                 <OverviewHeader />
                 <OverviewCards />
                 <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 m-8 ">
                  <CompanyProfilecard />
                  <CompanyRecentActivity />
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Dashboard
