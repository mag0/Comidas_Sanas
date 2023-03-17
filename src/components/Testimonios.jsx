import React from 'react'
import './Testimonios.scss'
import testimonios from '../testimonios.json'

export const Testimonios = () => {
  return (
    <>
      {
      testimonios.map((test) => (
        <div className='testimonio' key={test.id}>
          <div className='usuario'>
            <img src={`https://unavatar.io/${test.perfil}`} />
            <h5>{test.nombre}</h5>
          </div>
          <div className='texto'>
            <p>{test.testimonio}</p>
          </div>

        </div>
      ))
    }

    </>
  )
}
