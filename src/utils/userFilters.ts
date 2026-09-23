import { Users } from "../data/usersData"
export const invitedUsers = Users.filter(user=>user.activity === 'user_Invited')
export const deactivatedUsers = Users.filter(user=>user.activity === 'user_deactivated')
export const joinedUsers = Users.filter(user => user.activity === 'user_joined')
export const userUpdated = Users.filter(user=>user.activity === 'user_updated')