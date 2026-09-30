const Apiurl = 'https://dummyjson.com/users'
const Userapi =() => {
  return fetch(Apiurl)
  .then(res=>res.json())
  .then((data)=>{
   console.log(data)
   return data
  }
)
}

export default Userapi
