import React from 'react'
import { Carrito } from './carrito/Carrito'

export const Menú = () => {
    return (
        <>
            {/* Preloader */}
            <div className="preloader-wrapper">
                <div className="preloader"></div>
            </div>

            {/* Offcanvas Cart */}
            <Carrito />

            {/* Offcanvas Navbar */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                <div className="offcanvas-header justify-content-between">
                    <h4 className="fw-normal text-uppercase fs-6">Catálogo</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                        <li className="nav-item border-dashed active">
                            <a href="index.html" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#fruits"></use></svg>
                                <span>Fruits and vegetables</span>
                            </a>
                        </li>
                        <li className="nav-item border-dashed">
                            <a href="index.html" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#dairy"></use></svg>
                                <span>Dairy and Eggs</span>
                            </a>
                        </li>
                        <li className="nav-item border-dashed">
                            <a href="index.html" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#meat"></use></svg>
                                <span>Meat and Poultry</span>
                            </a>
                        </li>
                  
                    </ul>
                </div>
            </div>
        </>
    )
}
