
import { User } from "lucide-react"
const Profilesetting = () => {
  return (
 <div className='flex rounded-md flex-col gap-7 bg-white p-7'>
        <div className="flex gap-2  items-center">
            <div>
                <User className="bg-blue-100 text-blue-600 p-2 w-10 h-10 rounded-full"/>
            </div>
            <div className="flex flex-col">
                <h2 className='text-xl font-semibold'>Profile Settings</h2>
                <p className="text-sm text-gray-400">Update your personal information</p>
            </div>
        </div>

        <form className='flex flex-col gap-4' >
            <div className="flex flex-col gap-1">
              <label className='text-gray-800 font-medium'>Full name</label>
              <input type="text" className='border p-1 rounded-md outline-none border-gray-200' placeholder='enter full name'  required />
            </div>
 
             <div className="flex flex-col gap-1">
                 <label className='text-gray-800 font-medium'>Email</label>
                 <input className='border p-1 rounded-md outline-none border-gray-200' type='email'  placeholder='enter user email' required />
             </div>
           
            <div className='flex flex-col gap-1'>
            <label className='text-gray-800 font-medium'>Role</label>
            <select name=""  className='border p-1 rounded-md outline-none border-gray-200'>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
                <option value="HR">HR</option>
            </select>
            </div>
        </form>
        
    </div>
  )
}

export default Profilesetting
