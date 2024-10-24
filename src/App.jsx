import { NavBar } from './widgets/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Footer } from './widgets/Footer';
import { ProductProvider } from './context/ProductProvider';
import { Details } from './componentes/Details';
import { Categorias } from './widgets/categorias/Categorias';
import { ProductosCategoria } from './widgets/categorias/ProductosCategoria.jsx';// Asegúrate de crear este componente
import '../src/js/scripta.js';

function App() {
  return (
    <>
      <ProductProvider>
        <NavBar />
        <Categorias />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/categoria/:id" element={<ProductosCategoria />} />
        </Routes>
      </ProductProvider>
      <Footer />
    </>
  );
}

export default App;
