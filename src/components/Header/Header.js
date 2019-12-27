import React from 'react';
import './Header.css';
import NavLink from '../NavLink/NavLink';

const Header = () => {
    return (
        <header>
            <div className='navbar'>
                <h1>Github Portfolio App</h1>
                <NavLink url='https://www.reactjs.org/' title='Learn React' />
            </div>
        </header>
    );
}

export default Header;
