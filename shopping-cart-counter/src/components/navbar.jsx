import React from 'react';

const Navbar = ({totalCounters}) => {
  
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Navbar
            
            <span className="badge badge-pill badge-warning offset-2" >{totalCounters}</span>
            </a>
            </nav>
          );
    
}
 
export default Navbar;