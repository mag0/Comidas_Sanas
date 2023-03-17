import React from 'react'
import './Productos.scss'
import datos from '../comidas.json'

export const Productos = () => {
  return (
    <>
      {
        datos.map((data) => (
          <div className='productos' key={data.id}>
            <div className='imagen'>
              <img src={`${data.imagen}.jpg`} alt='' />
            </div>
            <div className='titulo'>
              <h3>{data.nombre}</h3>
            </div>

          </div>
        ))
      }

    </>
  )
}
