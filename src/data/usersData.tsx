import { Users } from "../interface/ActivityType";

export const invitedUsers = Users.filter((user)=>user.activity === 'user_Invited')
export const deactivatedUsers = Users.filter((user)=>user.activity === 'user_deactivated')
