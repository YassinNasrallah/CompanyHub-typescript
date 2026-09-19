import { Pencil } from "lucide-react";
import { CompanyField } from "./CompanyField";

const CompanySettingsCard = () => {
    
  return (
    <div className=" flex flex-col gap-5 ml-8 bg-white w-[80%] rounded-xl border border-gray-800/20 p-6">
       <div className=" flex justify-between items-center gap-7">
           <h2 className="font-semibold text-xl">Company Details</h2>
            <div className="flex justify-center items-center text-gray-800 p-0.5 gap-1 border-1 border-gray-400">
                <button type="button" className="bg-transparent flex justify-center items-center cursor-pointer"><Pencil size={15}/> Edit</button>
            </div>
       </div>
        
        <div className='flex flex-col gap-2'>
                {CompanyField.map((field)=>(
                    <form className="flex flex-col gap-1" key={field.id}>
                         <label className="text-gray-600 text-xs font-medium">{field.label}</label>
                         <input type="text" className='text-gray-500  font-semibold p-2 w-full bg-gray-100 outline-none focus:border-1 border-gray-600' readOnly value={field.value} />
                    </form>
                ))}
         </div>

    </div>
  )
}

export default CompanySettingsCard
