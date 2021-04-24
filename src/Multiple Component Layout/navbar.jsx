import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="wrapper">
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Education</a>
                        </li>
                        <li>
                            <a href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;