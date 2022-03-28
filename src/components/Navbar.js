import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, 
    faGraduationCap, 
    faBriefcase, 
    faChartSimple, 
    faAddressBook,
    faMoon
} from '@fortawesome/free-solid-svg-icons';
import './navbar-style.css';

const Navbar = () => {
    return (
        <nav className="menu-app">
            <div className="fixed-nav">
                <div className="web-mode">
                    <button>
                        <FontAwesomeIcon icon={faMoon} size="2x"/>
                    </button>
                </div>
                <div className="buttons-nav">
                    <ul>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHouse}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                                <FontAwesomeIcon icon={faGraduationCap}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/trajectory">
                                <FontAwesomeIcon icon={faChartSimple}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <FontAwesomeIcon icon={faBriefcase}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <FontAwesomeIcon icon={faAddressBook}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;