import React, { Component } from 'react';
import './grid-layout.css';

class GridLayout extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="wrapper">
                    <div className="nav-bar">
                        Navbar
                    </div>
                    <div className="content">
                        <div className="left-sidebar">
                            Left Sidebar
                        </div>
                        <div className="main-content">
                            Main Content
                        </div>
                    </div>
                    <div className="footer">
                        Footer
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GridLayout;