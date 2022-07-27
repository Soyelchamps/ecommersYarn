import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState ([]) //argunto de useState es el valor inicial que queremos para
    //nuestro estado
  
  
    // https://ecomerce-master.herokuapp.com/api/v1/item
    //todos los productos
    //https://ecomerce-master.herokuapp.com/api/v1/item/5fbc19a65a3f794d72471163
    //me da 1 solo producto 
    //MOC 
    //Nombre
    //descripcion 
    //precio
    //categoria
    //Imagen 
    //Ultima actuliacion 


  return (
    <>
       <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search"  placeholder="Busqueda" aria-label="Search"> 
          </input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
          <img src={logo} alt="logo" width="25px"/>
       </form>
         </nav>


    

     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            </header>
    </div>
   
   
    </>
 
  );
}

export default App;
