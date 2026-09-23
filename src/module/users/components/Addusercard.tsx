import { X } from 'lucide-react'
const Addusercard = () => {
  return (
    <div className='flex rounded-md flex-col gap-7 bg-white m-auto w-150  p-7'>
        <div className="flex justify-between">
            <h2 className='text-xl font-semibold'>Add User</h2>
            <button><X /></button>
        </div>

        <form className='flex flex-col gap-4'>
            <div className="flex flex-col gap-1">
              <label className='text-gray-800 font-medium'>Full name</label>
              <input type="text" className='border p-1 rounded-md outline-none border-gray-200' placeholder='enter full name' required />
            </div>
 
             <div className="flex flex-col gap-1">
                 <label className='text-gray-800 font-medium'>Email</label>
                 <input className='border p-1 rounded-md outline-none border-gray-200' type='email' placeholder='enter user email' required />
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


        <div className="flex gap-3 ">
            <button type='button' className="bg-blue-600 p-3 rounded-md text-sm text-white cursor-pointer">Add User</button>
            <button className='text-blue-600 cursor-pointer'>Cancel</button>
        </div>
        
    </div>
  )
}

export default Addusercard
