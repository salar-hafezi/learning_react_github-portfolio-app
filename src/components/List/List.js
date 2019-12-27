import React from 'react';
import './List.css';

const List = ({ items }) => {
    return (
        <ul>
            {items.map(item => 
                <li key={item.label}>
                    <strong>{item.label}</strong> : {item.value ? item.value : <span className='empty'>Not specified</span>}
                </li>)}
        </ul>
    );
}

export default List;
