import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faWrench
} from '@fortawesome/free-solid-svg-icons';
import './footer-style.css';

const Footer = () => {
    return (
        <footer>
            <p><FontAwesomeIcon icon={faWrench} /> - Made By Manuel Fonseca</p>
        </footer>
    );
};

export default Footer;