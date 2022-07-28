import React, {useEffect, useState } from 'react';
import logo from './Assets/logo.svg';
import { ReactComponent as pacman } from './Assets/pacman.svg';
import './App.css';
import { productosApi } from './Api/productosApi';
import { Card } from './Share/Card';

function App() {
  
  const [productos, setProductos] = useState ([]) //argunto de useState es el valor inicial que queremos para
  const [loading, setLoading] = useState(false)

  const getProductos = async() => {
    setLoading(true)
  const res= await productosApi.get('/item')
    setProductos(res.data)
    setLoading(false)
    console.log(JSON.stringify(res.data))
   }

useEffect (() => {
  console.log('hola me monte en la pantalla')
  getProductos() }, [])
  
  return (
    <>
       <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search"  placeholder="Busqueda" aria-label="Search"> 
          </input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
          <img src={logo} alt="logo" width="25px"/>
       </form>
         </nav>

        {
          loading ? 
              <pacman style={{heigth :50, width:50 }} />
              :
            (
              <div> {
            productos.map(producto => (
            <Card key={producto._id} producto={producto}/>
            ))}
        </div>
            )
        }
    </>
 
  );
}

export default App;
