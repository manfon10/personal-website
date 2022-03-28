import React from 'react';
import foto from '../assets/img/foto-web.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDownload
} from '@fortawesome/free-solid-svg-icons';
import './personalInfo-style.css';

const PersonalInfo = () => {
    return (
        <article className="container-personal">
            <div className="fixed-option">
                <div className="personal-information">
                    <div className="personal-image">
                        <img src={foto} alt=""/>
                    </div>
                    <h4>Manuel Fonseca</h4>
                    <h5>Web Developer</h5>
                    <div className="icons">
                        <a href="https://github.com/manfon10" target="_blanck"><i className="fab fa-github fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/manuel-fonseca-88416516a/" target="_blanck"><i className="fab fa-linkedin fa-lg"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=573222229886" target="_blanck"><i className="fab fa-whatsapp fa-lg"></i></a>
                        <a href="tel:+573222229886" target="_blanck"><i className="fas fa-phone fa-lg"></i></a>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="information-left">
                    <div>
                        <ul>
                            <li>
                                <p>Edad:</p>
                                <span>21</span>
                            </li>
                            <li>
                                <p>Residencia:</p>
                                <span>CO</span>
                            </li>
                            <li>
                                <p>Disponibilidad:</p>
                                <span style={{ color: 'green'}}>Disponible</span>
                            </li>
                            <li>
                                <p>Direccion:</p>
                                <span>Bogotá, Colombia</span>
                            </li>
                        </ul>
                    </div>
                    <div className="separator"></div>
                    <div className="skils">
                        <h5>Skils</h5>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>ReactJS</p>
                            <p>Redux</p>
                            <p>Git</p>
                        </div>
                    </div>
                    <div className="skils">
                        <h5>Extra Skils</h5>
                        <div>
                            <p>Linux</p>
                            <p>Windows Server</p>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="button-download-hv">
                    <a href="" download="HV-ManuelFonseca">Descargar HV <FontAwesomeIcon icon={faDownload} /></a>
                </div>
            </div>
        </article>
    );
};

export default PersonalInfo;