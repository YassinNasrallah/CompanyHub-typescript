import { useState } from 'react'

const useSidebar = () => {

    const [open, setOpen] = useState<boolean>(true)
    const togleSidebar =()=>{
        setOpen(prev=>!prev)
    } 
    
  return {
    open,
    togleSidebar
  }
}

export default useSidebar
