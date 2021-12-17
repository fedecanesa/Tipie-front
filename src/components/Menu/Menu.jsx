import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ProviderContext from '../../context/UserContext';
import Logo from '../../assets/icons/Logo/logo_1.png';
import './Menu.scss';

const Menu = () => {
    const { setUser } = useContext(ProviderContext)

    const CerrarSesion = () => {
        setUser(null)
    }
    return (
        <div className="menu">

            <Link className="menu__logo" to="/inicio">
                <img src={Logo} alt="Tipie" />
            </Link>

            <div className="menu__login">
                <Link
                    className="menu__login-text"
                    exact
                    to="/"
                    onClick={() => CerrarSesion()}
                >
                    Cerrar Sesión
                </Link>
            </div>
        </div >
    )
}

export default Menu;
