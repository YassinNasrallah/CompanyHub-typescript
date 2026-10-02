const Apiurl = 'https://dummyjson.com/users'
const Userapi =(endpoint:string) => {
  return fetch(`${Apiurl}/${endpoint}`)
  .then(res=>res.json())
  .then((data)=>{
   console.log(data)
   return data
  }
)
}

export default Userapi
