import React from 'react'
import '../styles/NotFound.scss'
const NotFound = () => {
    return (
        <div>
            <h1 className='title-404'>404</h1>
            <p className='text-404'>Creo que te equivoacaste de ruta mi pana!</p>
            <a className='button-404' href="./">Regresa a tu Home</a>
        </div>
    );
}

export default NotFound;