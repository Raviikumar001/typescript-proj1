
import React, { useState } from "react";

const users = [
    {name: 'Ravi', age: 24},
    {name: 'shivi', age: 22},
    {name: 'abhi', age: 27},
    {name: 'abhishek', age: 29}
] 

const UserSearch :React.FC = ()=>{

    const [name, setName] =useState('');
    const [user, setUser] =useState<{name:string, age: number} | undefined>();
    const onClick = ()=>{
      const foundUser = users.find( (user)=> {
        return user.name === name
      })

      setUser(foundUser)
    }

    return(
         <div> 
            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>

            <div>
                {user && user.name}
                {user && user.age}
            </div>

         </div>)
}

export default UserSearch;

