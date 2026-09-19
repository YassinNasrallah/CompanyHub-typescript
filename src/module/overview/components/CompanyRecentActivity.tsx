import { UserPlus, UserX } from "lucide-react";

import { deactivatedUsers, invitedUsers } from "../../../data/usersData";
const CompanyRecentActivity = () => {
  return (
    <div className='flex flex-col gap-5 ml-3 bg-white  rounded-xl border border-gray-800/20 p-6'>
        <div className=" flex justify-between items-center gap-7">
             <h2 className="font-semibold text-xl">Recently Activity</h2>
             <button className="text-blue-600 bg-transparent border-none">View All</button>
       </div>
        <div className="flex flex-col gap-3">

                  {invitedUsers.map((user)=>(
                    <div className="flex items-center justify-between">
                     <div className="flex justify-between items-center gap-5">
                      <UserPlus className="bg-green-100 text-green-600 p-2 w-10 h-10 rounded-full"/>
                      <div>
                        <h2 className="text-gray-900 font-medium">New Invited</h2>
                        <h3 className="text-gray-600  font-sm">{user.email}</h3>
                      </div>
                     </div>
                     <div>
                       <h3 className="text-gray-500  font-sm">{user.date}</h3>
                     </div>  
                    </div>
                   ))}

                   {deactivatedUsers.map((user)=>(
                       <div className="flex items-center justify-between">
                     <div className="flex justify-between items-center gap-5">
                      <UserX className="bg-red-100 text-red-600 p-2 w-10 h-10 rounded-full"/>
                      <div>
                        <h2 className="text-gray-900 font-medium">Deactivated User</h2>
                        <h3 className="text-gray-600  font-sm">{user.email}</h3>
                      </div>
                     </div>
                     <div>
                       <h3 className="text-gray-500  font-sm">{user.date}</h3>
                     </div>
                    </div>
                   ))}
            </div>
          </div>

  )
}

export default CompanyRecentActivity
