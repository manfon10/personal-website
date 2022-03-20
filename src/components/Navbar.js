import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGraduationCap, faBriefcase, faChartSimple, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav>
            <div>
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
                        <Link to="/education">
                            <FontAwesomeIcon icon={faBriefcase}/>
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
        </nav>
    );
};

export default Navbar;