import React from 'react';
import Card from './Card';


const CardList = ({friends}) => {
    const cardArray = friends.map((user, i) => {
        return <Card key={friends[i].id} username={friends[i].username} name={friends[i].name}/>  
    })
    
    return(
            <div  className='card-container'>
                {cardArray}
                
            </div>
    );
}

export default CardList;