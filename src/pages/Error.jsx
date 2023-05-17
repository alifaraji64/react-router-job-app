import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>Page not Found!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, molestias similique. Exercitationem ipsum officia magnam vel incidunt repudiandae corrupti vitae. Quibusdam, molestias corrupti. Repellat molestias dicta quas fuga nam quisquam!</p>
        <p>go to <NavLink to='/'> Home Page </NavLink> </p>
        </div>
    );
}

export default Error;
