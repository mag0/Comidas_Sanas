import React from 'react'
import './App.scss'
import { Productos } from './components/Productos'
import { Testimonios } from './components/Testimonios'

function App () {
  return (
    <>

      <div className='body'>

        <div className='header' id='inicio'>
          <header>
            <div className='titulos'>
              <h1>Comidas sanas</h1>
              <h2>" Productos sanos al alcance de tu mano "</h2>
            </div>
            <nav>
              <ul>
                <li><a href='#inicio'>Inicio</a></li>
                <li><a href='#productos'>Productos</a></li>
                <li><a href='#testimonios'>Testimonios</a></li>
                <li><a href='#redes'>Redes</a></li>
              </ul>
            </nav>
          </header>
        </div>

        <main>

          <section className='form_imagen'>
            <div className='form'>
              <h3>No dudes en contactarnos</h3>
              <form action=''>
                <input type='text' placeholder='Nombre' />
                <input type='text' placeholder='Apellido' />
                <input type='text' placeholder='Telefono' />
                <input type='text' placeholder='Email' />
                <button>Enviar</button>
              </form>
            </div>
          </section>

          <section className='ofertas'>
            <h3 className='titulo' id='productos'>Productos</h3>
            <div className='carrusel'>
              <Productos />
            </div>
          </section>

          <section className='testimonios'>
            <h3 className='titulo' id='testimonios'>Testimonios</h3>
            <div className='container'>
              <Testimonios />
            </div>
          </section>

          <section className='redes'>
            <h3 className='titulo' id='redes'>¡Siguenos!</h3>
            <ul>
              <li><a href='#'><img src='../public/facebook.png' alt='facebook' /></a></li>
              <li><a href='#'><img src='../public/instagram.png' alt='facebook' /></a></li>
              <li><a href='#'><img src='../public/twitter.png' alt='facebook' /></a></li>
              <li><a href='#'><img src='../public/whatsapp.png' alt='facebook' /></a></li>
            </ul>
          </section>

        </main>

        <footer>
          <div className='texto'>
            <h2>¡Gracias por visitarnos! </h2>
            <p>vuelva pronto</p>
          </div>
          <nav>
            <ul>
              <li><a href='#inicio'>Inicio</a></li>
              <li><a href='#productos'>Productos</a></li>
              <li><a href='#testimonios'>Testimonios</a></li>
              <li><a href='#redes'>Redes</a></li>
            </ul>
          </nav>
        </footer>

      </div>

    </>
  )
}

export default App

// https://www.elmueble.com/cocinas/comidas-saludables_46627
