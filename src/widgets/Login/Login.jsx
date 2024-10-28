import { useContext, } from "react";
import { ProductContext } from "../../context/ProductContext";



export const Login = () => {
    const { user, password, onChange, handleSubmit, loading } = useContext(ProductContext)

    return (
        <>

            <div className="d-flex align-items-center justify-content-center mb-5 mt-5 pb-5">

                <form onSubmit={handleSubmit} className="w-25 shadow p-5">
                    <div className="d-flex justify-content-center align-items-center flex-column gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        <h5 className="section-title">Acceso Panel Usuario</h5>
                    </div>
                    <div className="mb-3  ">
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            value={user}
                            onChange={onChange}
                            placeholder="Usuario"
                            aria-describedby="emailHelp"
                        />

                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            placeholder="Contrasena"
                            onChange={onChange}
                        />
                    </div>
                    {loading ? (
                        <span className="visually-hidden">Cargando...</span>
                    ) : (
                        <button type="submit" className="btn btn-primary">Login</button>
                    )}

                </form>
            </div>
        </>
    );
};


