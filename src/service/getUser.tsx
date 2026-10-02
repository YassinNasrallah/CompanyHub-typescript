import Userapi from "../Api/Userapi"
export const getUser = async(search:string) => {
       const response = await Userapi(`/search?q=${search}`)
       return response
}

export default getUser
