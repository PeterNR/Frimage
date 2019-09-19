import React, {Component} from 'react';
import '../App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import /*{BrowserRouter as Router, Switch, Route, */{Link} from 'react-router-dom';
//import { Link } from '@material-ui/core';
//import Friend from './Friend';

//import Button from '@material-ui/core/Button';

class HomePage extends Component {

    constructor(){
        super();
        this.state = {
          friends: [],
          friendImg: [],
          searchfield: ''
        }
      }

      
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> {
        return response.json();
      })
      .then(users =>{
        this.setState({friends : users}) 
      });
  }

  onSearchCange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    
    const filteredFriends = this.state.friends.filter(friend => {
      return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || 
             friend.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    /*this.setState({friendImg: [filteredFriends.length()] } );
    console.log(this.state.friendImg.length())*/

    return(
        
        <div>
          <div className='top'>
            <Link link exact to='/' > <h1>Frimage</h1> </Link>
            <SearchBox searchChange={this.onSearchCange} />
          </div>
          <CardList friends={filteredFriends}/>
        </div>  
      
    );
  } 
  
      
};

export default HomePage;