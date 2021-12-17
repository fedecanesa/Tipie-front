import React from "react";
import NotFound from '../../assets/img/404.png';
import "./NotMatch.scss";

const NotMatch = () => {
    return (
        <img
            src={NotFound}
            className="not-found"
            alt="Pagina no encontrada"
        />
    )
}

export default NotMatch;
