const UsersHeader = () => {

  return (
            <div className=" flex items-center justify-between  m-5">
              <div className='flex flex-col  gap-0.5'>
                <h2 className='font-bold text-2xl'>Users</h2>
                <p className='text-sm text-gray-600'>Manage your team members</p>
              </div>

              <div className="mr-5">
                 <button type="button" className="bg-blue-600 p-3 rounded-md text-sm text-white cursor-pointer">+ Add User</button>
              </div>
             </div>
      
  )
}

export default UsersHeader
