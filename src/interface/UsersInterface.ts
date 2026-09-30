export interface user {
      id: number,
      firstName: string,
      lastName: string,
      maidenName: string,
      age: number,
      gender: string,
      email:string,
      phone:string,
      username:string,
      password:string,
      birthDate:string,
      role:string
}

export interface usersResponce {
    users:user[]
    total:number,
    skip:number,
    limit:number
}

