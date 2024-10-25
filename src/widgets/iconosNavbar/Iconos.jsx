
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

export const Iconos = () => {
    const { auth } = useContext(ProductContext)
    return (
        < div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end" >
            <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                    {auth === true ? (
                        <NavLink to='/dashboard' className="p-2 mx-1">

                        <svg width="24" height="24">
                            <use xlinkHref="#user"></use>
                        </svg>

                    </NavLink>
                    ) : (
                        <NavLink to='/login' className="p-2 mx-1">

                            <svg width="24" height="24">
                                <use xlinkHref="#user"></use>
                            </svg>

                        </NavLink>

                    )
                    }

                </li >
                <li>
                    <a
                        href="#"
                        className="p-2 mx-1"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasCart"
                        aria-controls="offcanvasCart"
                    >
                        <svg width="24" height="24">
                            <use xlinkHref="#shopping-bag"></use>
                        </svg>
                    </a>
                </li>
            </ul >
        </div >
    )
}
