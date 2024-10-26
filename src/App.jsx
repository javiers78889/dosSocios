import { NavBar } from './widgets/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Footer } from './widgets/Footer';
import { ProductProvider } from './context/ProductProvider';
import { Details } from './componentes/Details';
import { Categorias } from './widgets/categorias/Categorias';
import { ProductosCategoria } from './widgets/categorias/ProductosCategoria.jsx';
import '../src/js/scripta.js';
import { Login } from './widgets/Login/Login.jsx';
import { Dashboard } from './componentes/Dashboard.jsx';


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
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </ProductProvider>
      <Footer />
    </>
  );
}

export default App;
