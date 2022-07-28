import React from 'react'
import { Producto } from '../Pages/Producto'


export const Card = ({producto}) => {
  return (
    <div className='card' >
      <div className='card-body'>  
          <h3 className="card-title">{`$  ${producto.price}`}</h3>
          <p class="card-text">{`${producto.product_name}`}</p>
          <a href="producto" element={<Producto key={producto._id} producto={producto}/>} class="btn btn-primary">Ver detalle</a>
    </div>
    </div>
        )
      }
