import React from 'react';
import "./Footer.scss";
import Logo from "../../assets/icons/Logo/logo.png";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import Facebook from '../../assets/icons/Redes_Sociales/facebook.svg';
import Instagram from '../../assets/icons/Redes_Sociales/instagram.svg';
import Twitter from '../../assets/icons/Redes_Sociales/twitter.svg';


const Footer = () => {
    return (
        <div id="footer">

            <div className="footer__header">
                <Link to="/">
                    <div className="footer__header--container">
                        <img src={Logo} alt="tipie" />
                    </div>
                </Link>
            </div>

            <div className='footer__body'>

                <div className="footer__body--social">
                    <h4>Redes Sociales</h4>
                    <ul>
                        <li>
                            <a href='/#' target="_blank" rel="noreferrer">
                                <img src={Facebook} className='' alt="" />
                            </a>
                        </li>
                        <li>
                            <a href='/#' target="_blank" rel="noreferrer">
                                <img src={Instagram} className='' alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/#" target="_blank" rel="noreferrer">
                                {/* <i className='fab fa-twitter'></i> */}
                                <img src={Twitter} className='' alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <Copyright />

        </div>
    )
}

export default Footer;
