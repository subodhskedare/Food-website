import { useState } from "react";


const User = ({name}) =>{

    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>User Information</h1>
            <h2>Name : {name}</h2>
            <h2>Count : {count}</h2>
            <h2>Profile : Full Stack</h2>
        </div>
    )
}

export default User;