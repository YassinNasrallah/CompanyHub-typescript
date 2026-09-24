
import { Lock } from "lucide-react"
const Securitysetting = () => {
  return (
<div className='flex rounded-md flex-col gap-7 bg-white  p-7'>
        <div className="flex gap-2 items-center">
            <div>
                <Lock className="bg-blue-100 text-blue-600 p-2 w-10 h-10 rounded-full"/>
            </div>
            <div className="flex flex-col">
                <h2 className='text-xl font-semibold'>Security</h2>
                <p className="text-sm text-gray-400">Keep your account safe with a strong password</p>
            </div>
        </div>

        <form className='flex flex-col gap-4' >
            <div className="flex flex-col gap-1">
              <label className='text-gray-800 font-medium'>Current Password</label>
              <input type="text" className='border p-1 rounded-md outline-none border-gray-200' placeholder='enter current password'  required />
            </div>
 
             <div className="flex flex-col gap-1">
                 <label className='text-gray-800 font-medium'>New Password</label>
                 <input className='border p-1 rounded-md outline-none border-gray-200' type='email'  placeholder='enter new password' required />
             </div>

             <div className="flex flex-col gap-1">
                 <label className='text-gray-800 font-medium'>Confirm Password</label>
                 <input className='border p-1 rounded-md outline-none border-gray-200' type='email'  placeholder='confirm password' required />
             </div>
        </form>
         <button type='submit' className="bg-blue-600 p-3 rounded-md text-sm text-white cursor-pointer">save changes</button>
    </div>
  )
}

export default Securitysetting
