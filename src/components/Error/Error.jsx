import React from 'react';
import './Error.scss';

const Error = ({ message }) => {
    return (
        <p className='error'>
            {message}
        </p>
    )
}

export default Error;
