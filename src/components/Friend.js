import React, { useEffect, useState } from 'react';
import '../App.js';
import {Link} from 'react-router-dom';

function Friend(/*{id ,name, username}, */{match})  {
    useEffect(() => {  
        fetchUserList();
        console.log('in useEffect', user);
        //console.log('in useEffect2', user.name);
    });

    const [user, setUser] = useState({})
    
    const fetchUserList = async () =>{
        const fetchUserList = await fetch('https://jsonplaceholder.typicode.com/users');
        const userList = await fetchUserList.json();
        setUser(userList[match.params.id].name)
        console.log(userList[match.params.id].name);
    }
    
    
    return(
        
        <div className='Friend'>
            <div className='top'>
                <Link link exact to='/' > <h1>Frimage</h1> </Link>
            </div>
            <div>
                <h1>Hello, my name is </h1>
                <h3>My username is </h3>
            </div>
            
        </div>
    )
}

export default Friend;