import React, { Component } from 'react';
import './grid-layout.css';

class GridLayout extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="wrapper">
                    <div className="nav-bar">

                    </div>
                    <div className="content">
                        <div className="left-sidebar">

                        </div>
                        <div className="main-content">

                        </div>
                    </div>
                    <div className="footer">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GridLayout;