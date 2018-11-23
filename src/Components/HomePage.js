import React, { Component } from 'react';
import Main from './Main';
import { NavLink } from 'react-router-dom';

class homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1> Welcome to Quize Application</h1>
                
              <NavLink className = "Navbar-link" to = "/Main">Create a quize</NavLink>
              <NavLink className = "Navbar-link" to = "/TakeAquiz">Take a quize</NavLink>
              <NavLink className = "Navbar-link" to = "/QuizeSample"> quize</NavLink>

            </div>
         );
    }
}
 
export default homepage;