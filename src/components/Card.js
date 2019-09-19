import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'



const Card =({id, name, username}) =>{
    console.log(id);
    return(
        
        //gjør hele diven til en lenke
        <Link to={`/friend/${id}`} className='linkText'>
            <div  className='card'>
                <div >
                    <img 
                        alt='user' 
                        src={require('../DefaultImageFrimage.jpg')} 
                        
                        /*className='card-element'*/
                    />
                </div>
                
                <div className='card-element' /*Lager nedre delen av kortet */>
                    <div >
                        <p>{username}</p>
                    </div>
                    <div >
                        <h2 >{name}</h2>
                    </div>
                    <div >
                        
                    </div>
                </div>
            </div>
        </Link>
    );
}
/*function Card() {
  return (
    <div>

    </div>
  );
}*/

export default Card;
