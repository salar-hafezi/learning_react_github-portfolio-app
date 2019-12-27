import React from 'react';
import './List.css';

const List = ({ items, title }) => {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {items.map(item =>
                    <li key={item.label}>
                        <strong>{item.label}</strong> : {item.value ? item.value : <span className='empty'>Not specified</span>}
                    </li>)}
            </ul>
        </>
    );
}

export default List;
