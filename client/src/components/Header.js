import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
          <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo">
                    Stock Watcher
                </a>
                <ul className="right">
                    <li>
                        <a>Log in with Google</a>
                    </li>
                </ul>
            </div>
          </nav>  
        );
    }
}

export default Header;