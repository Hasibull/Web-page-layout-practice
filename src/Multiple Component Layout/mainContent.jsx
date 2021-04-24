import React, { Component } from 'react';
import './mainContent.css';

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wrapper-main">
                <p className="first-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam quisquam distinctio incidunt odit, sint suscipit ratione doloremque cum aliquid repellat inventore tempora molestias. Sed eligendi sit adipisci praesentium accusamus!
                </p>
                <p className="second-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat numquam non nulla consequuntur id placeat quidem neque rem error expedita corporis, eaque iusto veritatis! Veritatis quidem similique rem omnis facilis!
                </p>
            </div>
        );
    }
}
 
export default MainContent;