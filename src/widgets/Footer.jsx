import '@fortawesome/fontawesome-free/css/all.min.css';
import dosSocios from '../img/ferreteria-dos-socios.png'
export const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container-lg">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-menu">
                            <img src={dosSocios} width="200" height="180" alt="logo" />
                            <div className="social-links mt-3">
                                <ul className="d-flex justify-content-center list-unstyled gap-3">
                                    <li>
                                        <a href="#" className="fab fa-instagram fa-2x">
                                            <svg width="16" height="16">
                                                <use xlinkHref="#instagram"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-menu">
                            <h5 className="widget-title">Enlaces rápidos</h5>
                            <ul className="menu-list list-unstyled">
                                <li className="menu-item">
                                    <a href="#" className="nav-link">Nosotros</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="nav-link">Condiciones</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="nav-link">Seguimiento del pedido</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="nav-link">Tienda</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-menu">
                            <h5 className="widget-title">Servicio al cliente</h5>
                            <ul className="menu-list list-unstyled">
                                <li className="menu-item">
                                    <a href="#" className="nav-link">Preguntas Frecuentes</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="nav-link">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
