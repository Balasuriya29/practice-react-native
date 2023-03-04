import React, { Component } from 'react';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand h1">Navbar</span>
                    <h2><span className="badge badge-success">{this.props.noOfCounters}</span></h2>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;