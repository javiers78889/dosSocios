
import { NavBar } from './widgets/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './componentes/Inicio'

import { Footer } from './widgets/Footer'
import { ProductProvider } from './context/ProductProvider'
import { Details } from './componentes/Details'
import { Categorias } from './widgets/categorias/Categorias'



function App() {


  return (
    <>
      <NavBar />
      <Categorias />
      <ProductProvider>
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
