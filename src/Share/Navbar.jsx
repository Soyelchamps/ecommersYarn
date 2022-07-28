import React from 'react'
import logo from '../Assets/logo.svg';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search"  placeholder="Busqueda" aria-label="Search"> 
      </input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
      <img src={logo} alt="logo" width="25px"/>
     </form>
   </nav>

  )
}
