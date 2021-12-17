import React from 'react';
import './Copyright.scss';
const Copyright = () => {
    return (
        <div className='footer__foot'>
            <p>
                &copy; {new Date().getFullYear()} Tipie. Desarrollado por{' '}
                <a href='http://www.tipieapp.com' rel='nofollow'>
                    Tipie
                </a>
            </p>
        </div>

    )
}

export default Copyright;