import { useState } from "react"
const useMenu = () => {
    const [openMenu, setOpenmenu] = useState(false)
    const handlClick = () =>{
        setOpenmenu(prev => !prev)
    }
  return {
    openMenu,
    handlClick
  }
}

export default useMenu
