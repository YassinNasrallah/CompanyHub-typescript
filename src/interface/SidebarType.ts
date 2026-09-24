  import {Settings, House, BriefcaseBusinessIcon, Users, type LucideIcon,} from 'lucide-react'
  
  type Sidbardata = {
    icon:LucideIcon,
    title:string,
    to:string
  }

export  const sidebarItems:Sidbardata[]=[
    {icon:House, title:'Overview', to:'/'},
    {icon:BriefcaseBusinessIcon, title:'Company Profile', to:'/Compagnyprofile'},
    {icon:Users, title:'Users', to:'/users'},
    {icon:Settings, title:'Setting', to:'/settings'},
  ]