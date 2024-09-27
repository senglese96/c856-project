import React from 'react'
import Navbutton from './navbutton';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className='homebox'>
                    <Link to={'/'} >
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <h2>The Island of Taniti</h2>
                </div>
                <div className="buttonbox">
                    <Navbutton value={'Accommodations'} />
                    <Navbutton value={'Attractions'} />
                    <Navbutton value={'FAQ'} />
                </div>
            </div>
        )
    }
}

export default Navbar;