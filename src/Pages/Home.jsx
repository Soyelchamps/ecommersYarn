import React, {useEffect, useState } from 'react';
import { ReactComponent as Pacman } from '../Assets/pacman.svg';
import { Card } from '../Share/Card';
import { productosApi } from '../Api/productosApi';

export const Home = () => {
    const [productos, setProductos] = useState ([]) //argunto de useState es el valor inicial que queremos para
      const [loading, setLoading] = useState(false)

      const getProductos = async() => {
        setLoading(true)
      const res= await productosApi.get('/item')
        setProductos(res.data)
        setLoading(false)
        //console.log(JSON.stringify(res.data))
       }
    
    useEffect (() => {
      //console.log('hola me monte en la pantalla')
      getProductos() }, [])
      
  return (
    <>
          { 
        loading ? <Pacman /> :
         (
            <div> 
                <div class="d-flex flex-row flex-wrap bd-highlight mb-4">{
                  productos.map(producto => (
                  <Card key={producto._id} producto={producto}/>
                  ))}
                </div>
            </div>
          )
        }  
    </>
  )
}
