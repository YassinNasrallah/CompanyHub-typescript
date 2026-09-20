import { ArrowUp, ArrowDown, Users, User, Mail, Blocks } from "lucide-react";
import { DashboardData } from "../../../interface/DataType";
const OverviewCards = () => {
  return (
    <div className="mx-5 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-5">
      <div className="bg-white w-auto flex flex-col gap-3 rounded-xl border border-gray-800/20 p-6">
         <Users className="bg-blue-100 text-blue-600 p-2 w-10 h-10 rounded-full"/>
         <div>
            <h2 className="font-bold text-black text-3xl">{DashboardData.statistics.totalUsers}</h2>
            <p className="text-sm text-gray-500">Total Users</p>
         </div>

         <div className="flex">
            <ArrowUp className="w-4 mr-0.5 text-green-400"/>
            <p className="text-green-400">+2 this week</p>
         </div> 
      </div>

      <div className="bg-white w-auto flex flex-col gap-3 rounded-xl border border-gray-800/20 p-6">
         <User className="bg-green-100 text-green-600 p-2 w-10 h-10 rounded-full"/>
         <div>
            <h2 className="font-bold text-black text-3xl">{DashboardData.statistics.activeUsers}</h2>
            <p className="text-sm text-gray-500">Active Users</p>
         </div>
         <div className="flex">
            <ArrowUp className="w-4 mr-0.5 text-green-400"/>
            <p className="text-green-400">+5 this week</p>
         </div>
      </div>

      <div className="bg-white w-auto flex flex-col gap-3 rounded-xl border border-gray-800/20 p-6">
         <Mail className="bg-yellow-100 text-yellow-600 p-2 w-10 h-10 rounded-full"/>
         <div>
            <h2 className="font-bold text-black text-3xl">{DashboardData.statistics.pendingInvitations}</h2>
            <p className="text-sm text-gray-500">Pending Invitation</p>
         </div>

         <div className="flex">
            <ArrowUp className="text-yellow-400 mr-0.5 w-4"/>
            <p className="text-yellow-400">0 this week</p>
         </div>
      </div>

      <div className="bg-white w-auto flex flex-col gap-3 rounded-xl border border-gray-800/20 p-6">
         <Blocks className="bg-red-100 text-red-600 p-2 w-10 h-10 rounded-full"/>
         <div>
            <h2 className="font-bold text-black text-3xl">{DashboardData.statistics.deactivatedUsers}</h2>
            <p className="text-sm text-gray-500">Deactivated Users</p> 
         </div>
         <div className="flex">
            <ArrowDown className="mr-0.5 text-red-400 w-4"/>
             <p className="text-red-400">+1 his week</p>
         </div>
      </div>
    </div>
  )
}
export default OverviewCards
