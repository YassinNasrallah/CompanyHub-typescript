import { Activity } from "react"

export type ActivityType = 'user_Invited'|"user_updated"|"user_deactivated"|"user_joined"|"company_joined"

export type Activity = {
    id:number,
    user:string,
    email:string,
    activity:ActivityType,
    date:string,
}

export const Users:Activity[]=[
      {id:1 , user:'uassin nassrallah', email:'yassinnasrallah@gmail.com', activity:'user_Invited', date:'2h ago'},
      {id:1 , user:'ussef nassrallah', email:'ussefnasrallah@gmail.com', activity:'user_deactivated', date:'week ago'},
    
]


