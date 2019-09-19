import React, { useEffect, useState } from 'react';
import '../App.js';
import {Link} from 'react-router-dom';

function Friend({match})  {
    useEffect(() => {  
        fetchUserList();
        console.log('in useEffect', userName);
    });

    const [userName, setUsername] = useState('')
    const [name, setName] = useState('')

    const fetchUserList = async () =>{
        const fetchUserList = await fetch('https://jsonplaceholder.typicode.com/users');
        const userList = await fetchUserList.json();
        setUsername(userList[match.params.id].username);
        setName(userList[match.params.id].name);
    }
    
    
    return(
        
        <div className='Friend'>
            <div className='top'>
                <Link link exact to='/' > <h1>Frimage</h1> </Link>
            </div>
            <div>
                <h1>Hello, my name is {name} </h1>
                <h3>My username is {userName} </h3>
            </div>
            
        </div>
    )
}

export default Friend;