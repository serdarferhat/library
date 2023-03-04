import React from "react";

import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"} >
          My Library
        </Link>
         <Link className="nav-link" style={{color:"white"}} to={"/list-categories"}>
                Kategori Listesi
              </Link>
        
      </div>
    </nav>
  );
};

export default Header
