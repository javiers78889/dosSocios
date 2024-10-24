
import { NavBar } from './widgets/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './componentes/Inicio'

import { Footer } from './widgets/Footer'
import { ProductProvider } from './context/ProductProvider'
import { Details } from './componentes/Details'
import { Categorias } from './widgets/categorias/Categorias'
import '../src/js/scripta.js'


function App() {


  return (
    <>
      <ProductProvider>
      <NavBar />
      <Categorias />
        <Routes>

          <Route path='/' element={<Inicio />} />
          <Route path='/details/:id' element={<Details />} />

        </Routes>
      </ProductProvider>

      <Footer />
    </>
  )
}

export default App
