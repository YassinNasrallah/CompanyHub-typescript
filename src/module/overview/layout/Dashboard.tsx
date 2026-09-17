
import Sidebar from '../../../components/Sidebar'
import OverviewCards from '../components/OverviewCards'
import OverviewHeader from '../components/overviewHeader'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50
    dark:from-slate-900 dark:via-slate-00 dark:via-slate-800 transition-all duration-500'>
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
             
             <div className="flex flex-col flex-1">
                 <OverviewHeader />
                 <OverviewCards />
             </div>
            
        </div>
     
    </div>
  )
}

export default Dashboard
