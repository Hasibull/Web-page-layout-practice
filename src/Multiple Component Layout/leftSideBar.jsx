import React, { Component } from 'react';
import './leftSideBar.css';

class LeftSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wrapper-left">
                <ul>
                    <li>
                        <a href="#">First Content</a>
                    </li>
                    <li>
                        <a href="#">Second Content</a>
                    </li>
                    <li>
                        <a href="#">Third Content</a>
                    </li>
                    <li>
                        <a href="#">Forth Content</a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default LeftSideBar;