import { useEffect, useState } from 'react'
import { NavBar } from './widgets/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './componentes/Inicio'
import { findAllProducts } from './services/Productos'
import { Footer } from './widgets/Footer'


function App() {
  const [products, setProducts] = useState([])


  const listaProduct = async () => {
    const captura = await findAllProducts();

    setProducts(captura)

  }

  useEffect(() => {

    listaProduct()
  }, [])
  console.log(products[0] ? (products[0].imagen) : (null))

  return (
    <>
      <NavBar />
      <Routes>

        <Route path='/' element={<Inicio products={products} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
