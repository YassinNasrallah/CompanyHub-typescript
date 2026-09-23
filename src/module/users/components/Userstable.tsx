
import { Users } from "../../../interface/ActivityType"
import { MoreVertical  } from "lucide-react";

const Userstable = () => {
  return (
    <div>
        <table className="w-full">
          <thead>
            <tr className=" border-slate-200 border">
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Role</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
            </tr> 
          </thead>
          <tbody>
 
        {Users.map((user)=>(
           <tr key={user.id} className="border-b bg-white border-slate-200">
                <td className="text-sm font-bold p-4">{user.user}</td>
                <td className="p-4 text-sm text-gray-700">{user.email}</td>
                <td className="bg-blue-600 text-white p-4">{user.role}</td>
                <td className="p-4 bg-green-600 text-white">{user.status}</td>
               <td className="p-4">
                <button className="cursor-pointer">
                    <MoreVertical />
                </button>
                </td>
           </tr> 
           ))}
     

       </tbody>
</table>
      
    </div>
  )
}

export default Userstable
