import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavigationLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <>
        <Link
          style={{ color : match ? 'salmon' : 'cadetblue', textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </>
    );
  }

export default NavigationLink;