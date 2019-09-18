import React, {useState, useEffect} from 'react';
import '../App.js';
import {Link} from 'react-router-dom';

function Friend({name, username})
{
    /*const fetchItems = async() => {
        const 
    }*/

    //henter informasjon fra state og gir ut
    return(
        <div className='Friend'>
            <Link link exact to='/' > <h1>Frimage</h1> </Link>
            <h1>Hello, my name is {name}</h1>
            <h3>My username is {username}</h3>
        </div>
    )
}

export default Friend;