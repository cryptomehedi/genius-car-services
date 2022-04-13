import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
                style={{ color: match ? 'red': 'black', textDecoration: match ? "underline" : "none", fontWeight: match ? 'bold' : 'semibold'}}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink;