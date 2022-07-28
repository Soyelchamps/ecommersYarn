import React from 'react'


export const Card = ({producto}) => {
  return (
    <div className='card-container'>
                <img width="200px" className="rounded mx-auto d-block" src={producto.image} alt={producto.product_name}/>
                <h2 className="text-success fs-1">{`$  ${producto.price}`}</h2>
                <h3>{`${producto.product_name}`}</h3>
                <button type="button" className="btn btn-primary">Ver</button>
            </div>
  )
}
