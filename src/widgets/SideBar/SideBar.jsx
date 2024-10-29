
import { useContext } from 'react'
import imga from '../../img/ferreteria-dos-socios.png'
import { ProductContext } from '../../context/ProductContext'
import { Link, NavLink } from 'react-router-dom'

export const SideBar = () => {
    const { Deslogueo, personas, logueado } = useContext(ProductContext)
    const filtrado = personas.filter((n) => n.user === logueado)

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark w-25 pb-5" style={{ width: '280px' }}>
            <Link to='/dashboard' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={imga} alt="" width="32" height="32" className="rounded-circle me-2" />
                <span className="fs-4">Dashboard</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to='/dashboard/home' className="nav-link active" aria-current="page">
                        <svg className="bi me-2" width="16" height="16">
                            <use xlinkHref="#home" />
                        </svg>
                        Home
                    </NavLink>
                </li>
                {filtrado[0].role !== 'admin' ? (
                    <>

                        <li>
                            <NavLink to='/dashboard/facturas' href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#grid" />
                                </svg>
                                Facturas
                            </NavLink>
                        </li>

                        <ul className="nav nav-pills flex-column mb-auto pb-5">
                            <li className="nav-item"></li>
                        </ul>
                        <ul className="nav nav-pills flex-column mb-auto pb-5">
                            <li className="nav-item"></li>
                        </ul>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to='/dashboard/usuarios' className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#speedometer2" />
                                </svg>
                                Usuarios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/catalogo' className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#table" />
                                </svg>
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/facturas' href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#grid" />
                                </svg>
                                Facturas
                            </NavLink>
                        </li>
                    </>
                )}





            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={imga} alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Salir</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">

                    <li><button onClick={Deslogueo} className="dropdown-item" >Salir</button></li>
                </ul>
            </div>
        </div>

    )
}
