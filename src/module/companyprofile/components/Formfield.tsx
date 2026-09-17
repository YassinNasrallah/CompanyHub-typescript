import { CompanyField } from './CompanyField'
const Formfield = () => {
  return (
    <div className='flex flex-col gap-2'>
        {CompanyField.map((field)=>(
            <div className="flex flex-col gap-1" key={field.id}>
                 <label className="text-gray-600 text-xs font-medium">{field.label}</label>
                 <input type="text" className='text-gray-500  font-semibold p-2 w-full bg-gray-100 outline-none focus:border-1 border-gray-600' readOnly value={field.value} />
            </div>
        ))}
    </div>
  )
}

export default Formfield
