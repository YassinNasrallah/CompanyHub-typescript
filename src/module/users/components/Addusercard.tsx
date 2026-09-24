import { X } from 'lucide-react'
import { useState } from 'react'

type AddusercardProps = {
    onClose:()=>void
}

const Addusercard = ({onClose}:AddusercardProps) => {

    const [newUser, setNewUser] = useState({
        user:'',
        email:'',
        role:'',
        date:'',
    })
    
  return (
    <div className='flex rounded-md flex-col gap-7 bg-white m-auto w-150  p-7'>
        <div className="flex justify-between">
            <h2 className='text-xl font-semibold'>Add User</h2>
            <button type='button' onClick={onClose} ><X /></button>
        </div>

        <form className='flex flex-col gap-4'>
            <div className="flex flex-col gap-1">
              <label className='text-gray-800 font-medium'>Full name</label>
              <input type="text" value={newUser.user} className='border p-1 rounded-md outline-none border-gray-200' placeholder='enter full name' onChange={(e)=>setNewUser({...newUser, user:e.target.value})} required />
            </div>
 
             <div className="flex flex-col gap-1">
                 <label className='text-gray-800 font-medium'>Email</label>
                 <input className='border p-1 rounded-md outline-none border-gray-200' type='email' value={newUser.email} onChange={(e)=>setNewUser({...newUser, email:e.target.value})} placeholder='enter user email' required />
             </div>
           
            <div className='flex flex-col gap-1'>
            <label className='text-gray-800 font-medium'>Role</label>
            <select value={newUser.role} onChange={(e)=>setNewUser({...newUser, role:e.target.value})} name=""  className='border p-1 rounded-md outline-none border-gray-200'>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
                <option value="HR">HR</option>
            </select>
            </div>
        </form>

        <div className="flex gap-3 ">
            <button type='button' className="bg-blue-600 p-3 rounded-md text-sm text-white cursor-pointer">Add User</button>
            <button className='text-blue-600 cursor-pointer'>Cancel</button>
        </div>
        
    </div>
  )
}

export default Addusercard
