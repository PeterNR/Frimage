import React from 'react';
import {Link} from 'react-router-dom';
import SearchBox from './SearchBox';

const TopBar = ({searchChange, searchfield}) => {
    return(
        <div className='top'>
            <Link link exact to='/' > <h1>Frimage</h1> </Link>
            <SearchBox searchChange={this.props.searchCange} />
        </div>
    )
    
}


export default TopBar;