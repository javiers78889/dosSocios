import React from 'react'
import { Menú } from './Menú'
import dosSocios from '../img/ferreteria-dos-socios.png'
import { Svg } from './Svg'
import { Iconos } from './iconosNavbar/Iconos'
import { Link } from 'react-router-dom'
import { Links } from './Links/Links'


export const NavBar = () => {
    return (
        <>
            {/*Iconos de Logueo y carrito*/ }
            <Svg />
             {/*Menú Catálogo*/ }
            <Menú />

            <header >
                <div className="container-fluid ">
                    <div className="row py-3 border-bottom  bg-light shadow">
                        {/* Logo and Menu Button */}
                        <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
                            <div className="d-flex align-items-center my-3 my-sm-0">
                                <a href="index.html">
                                    <img src={dosSocios} alt="logo" height={60} width={60} />
                                </a>
                            </div>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                    <use xlinkHref="#menu"></use>
                                </svg>
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
                            <div className="search-bar row bg-light p-2 rounded-4">
                                <div className="col-md-4 d-none d-md-block">
                                    <select className="form-select border-0 bg-transparent">
                                        <option>All Categories</option>
                                        <option>Groceries</option>
                                        <option>Drinks</option>
                                        <option>Chocolates</option>
                                    </select>
                                </div>
                                <div className="col-11 col-md-7">
                                    <form id="search-form" className="text-center" action="index.html" method="post">
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent"
                                            placeholder="Buscar Artículo"
                                        />
                                    </form>
                                </div>
                                <div className="col-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <Links />

                        <Iconos />
                    </div>
                </div>
            </header>

        </>
    )
}
