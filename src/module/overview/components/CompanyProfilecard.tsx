import { DashboardData } from "../../../interface/DataType"
const CompanyProfilecard = () => {
  
  return (
   <div className="flex flex-col gap-5 ml-3 bg-white  rounded-xl border border-gray-800/20 p-6">
       <div className=" flex justify-between items-center gap-7">
           <h2 className="font-semibold text-xl">Company Information</h2>
            <div className="flex justify-center items-center text-gray-800 p-0.5 gap-1 border border-gray-400">
                <button type="button" className="bg-transparent flex justify-center items-center cursor-pointer">Edit</button>
            </div>
       </div>
       

                 <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                   <h2 className="text-gray-600  font-medium">Compagny Name</h2>
                   <p className="text-gray-900 font-medium">{DashboardData.company.name}</p>
               </div>
               <div className="flex justify-between">
                   <h2 className="text-gray-600 font-medium">VAT Number</h2>
                   <p className="text-gray-900 font-medium">{DashboardData.company.vatNumber}</p>
               </div>
               <div className="flex justify-between">
                   <h2 className="text-gray-600 font-medium">Register Address</h2>
                   <p className="text-gray-900 font-medium">{DashboardData.company.address}</p>
               </div>
               <div className="flex justify-between">
                   <h2 className="text-gray-600 font-medium">Phone Number</h2>
                   <p className="text-gray-900 font-medium">{DashboardData.company.phone}</p>
               </div>
               <div className="flex justify-between">
                   <h2 className="text-gray-600 font-medium">Website</h2>
                   <p className="text-gray-900 font-medium">{DashboardData.company.website}</p>
               </div>
           </div>
     </div>  
     
  )
}

export default CompanyProfilecard
