
import { useState } from "react";
import { MoreVertical  } from "lucide-react";
import useUsers from "../hook/useUsers";
import type { UserType } from "../../../types/usertype";

const Userstable = () => {
  const {deleteUser, users}= useUsers()

  const [showDeleteButton, setShowDeleteButton]= useState<number | null>(null)
  const Showbutton = (index:number) =>{
    setShowDeleteButton(prev=> prev === index ? null : index)
  }
  
  return (
        <table className="w-full">
          <thead >
            <tr className=" border-slate-200 border">
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Role</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
            </tr> 
          </thead>


          <tbody>
            {users.map((user:UserType, index:number)=>(
              <tr key={user.id} className="border-b bg-white border-slate-200">
                <td className="text-sm font-bold p-4">{user.user}</td>
                <td className="p-4 text-sm text-gray-700">{user.email}</td>
                <td className="bg-blue-600 text-white p-4">{user.role}</td>
                <td className="p-4 bg-green-600 text-white">{user.status}</td>
                <td className="p-4 flex flex-col relative">
                  <button onClick={()=>Showbutton(index)} className="cursor-pointer" type="button">
                     <MoreVertical />
                  </button>
                  <button onClick={()=>deleteUser(user.id)} type="button" className={`${showDeleteButton === index ? 'cursor-pointer visible' : 'hidden'} bg-white absolute top-10 shadow-md p-1 text-sm rounded-md`}>
                     Delete User
                  </button>
                </td>
              </tr> 
           ))}
     

         </tbody>
       </table>
  )
}

export default Userstable
