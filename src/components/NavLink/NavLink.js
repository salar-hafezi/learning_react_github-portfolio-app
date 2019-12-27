import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
    float: right;
    text-decoration: underline;
    color: #eee;
    font-size: 1.2em;
`;

const NavLink = ({ url, title }) => {
    return (
        <InnerLink
            className='nav-link'
            href={url}
            target='_blank'
        >
            {title}
        </InnerLink>
    );
}

export default NavLink;
