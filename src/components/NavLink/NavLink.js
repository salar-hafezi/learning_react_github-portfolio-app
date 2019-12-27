import React from 'react';
import './NavLink.css';

const NavLink = ({ url, title }) => {
    return (
        <a
            className='nav-link'
            href={url}
            target='_blank'
        >
            {title}
        </a>
    );
}

export default NavLink;
