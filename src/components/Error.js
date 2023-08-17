import React from 'react';

const Error = ({ message }) => {
    return (
        <section className='error'>
            <div><i className="fa-solid fa-triangle-exclamation"></i></div>
            <div>{message}</div>
        </section>
    )
}

export default Error;