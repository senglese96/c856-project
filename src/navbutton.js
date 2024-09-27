import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';

const Navbutton = ({
    focus,
    value
}) => {
    const location = useLocation();
    const [isFocus, setIsFocus] = useState(focus);

    useEffect(() => {
        if(window.location.pathname === '/' + value.toLowerCase()) setIsFocus(true);
        else(setIsFocus(false))
    }, [location])

    return (
        <Link to={ '/' + value.toLowerCase() } className={isFocus 
            ? 'navbutton selected' 
            : 'navbutton'}>
            {value}
        </Link>
    )
}

export default Navbutton;