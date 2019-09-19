import React, { useEffect, useState } from 'react';
import '../App.js';
import {Link} from 'react-router-dom';
import ImgSelector from './ImgSelector';
import Button from '@material-ui/core/Button';


function Friend({match})  {
    useEffect(() => {  
        fetchUserList();
        //console.log('in useEffect', userName);
    }, []);

    const [userName, setUsername] = useState('');
    const [name, setName] = useState('');

    const fetchUserList = async () =>{
        const fetchUserList = await fetch('https://jsonplaceholder.typicode.com/users');
        const userList = await fetchUserList.json();
        //console.log(userList);
        setUsername(userList[match.params.id].username);
        setName(userList[match.params.id].name);
    }
    
    
    return(
        <div >
            <div className='top'>
                <Link link exact to='/' > <h1>Frimage</h1> </Link>
            </div>
            <div className='Friend'>
                <div>
                    <h1>Name: {name} </h1>
                    <h3>Username: {userName} </h3>
                </div>
                <div className='imgBox'>
                    <ImgSelector/>
                    <br/>
                    <Button variant='contained' color='primary' onClick = {() => {window.history.pushState({urlPath:'/friend'}, '/friend');}}>
                        Frimage friend
                    </Button> 
                </div>
            </div>
            
            
        </div>
    )
}

export default Friend;