import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
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
                        <Button variant='contained' color='primary' onClick = {() => {window.history.pushState({urlPath:'/friend'}, '/friend');}}>
                            Frimage friend
                        </Button> 
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
