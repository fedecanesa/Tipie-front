import React from "react";
import "./Layout.scss";
import { Menu, Footer } from "../index";


const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Menu />
            <div className="layout__container">
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout;