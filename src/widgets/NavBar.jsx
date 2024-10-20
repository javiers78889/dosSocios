import React from 'react';
import { Menú } from './Menú';
import dosSocios from '../img/logoSencillo.png';
import { Svg } from './Svg';
import { Iconos } from './iconosNavbar/Iconos';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            {/*Iconos de Logueo y carrito*/}
            <Svg />
            {/*Menú Catálogo*/}
            <Menú />

            <header>
                <div className="container-fluid">
                    <div className="row py-3 border-bottom bg-light shadow justify-content-center align-items-center">
                        {/* Logo and Menu Button */}
                        <div className="col-sm-4 col-lg-4 d-flex justify-content-center justify-content-sm-start align-items-center my-3">
                            <Link to="/" className="d-flex align-items-center text-decoration-none">
                                <img src={dosSocios} alt="logo" height={60} width={60} />
                                <span id="logotipo" className="ms-2">Ferretería Dos Socios</span>
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="search-bar row bg-light p-2 rounded-4 align-items-center">
                                <div className="col-8 col-md-10">
                                    <form id="search-form" className="text-center" action="index.html" method="post">
                                        <input
                                            type="text"
                                            className="form-control custom-search border-0 bg-transparent"
                                            placeholder="¿Qué necesitas?"
                                        />
                                    </form>
                                </div>
                                <div className="col-4 col-md-2 d-flex align-items-center justify-content-center">
                                    <button className="btn btn-link">
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
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <Iconos />
                    </div>
                </div>
            </header>
        </>
    );
};
