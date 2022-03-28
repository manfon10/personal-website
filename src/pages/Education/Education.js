import React from 'react';
import { Footer } from '../../components';
import Sena from '../../assets/img/sena.jpeg';
import Academlo from '../../assets/img/academlo.png';
import DiplomaTecnico from '../../assets/img/diploma-tecnico.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import './education-style.css';

const Education = () => {
    return (
        <section className="container-education">
            <article className="title-education">
                <h2>Educación</h2>
            </article>
            <article className="rute-education">
                <div className="info-education">
                    <div className="info-rute">
                        <h4>Academlo</h4>
                        <p>En proceso <span className="color-date">Oct 2021 - Actualidad</span></p>
                        <img src={Academlo} alt="Academlo"/>
                    </div>
                    <div className="description-rute">
                        <h4>Web Full-Stack</h4>
                        <p>El programa Web Full-Stack se creó para brindar conocimientos en el area de Desarrollo Web Full-Stack con los lenguajes mas modernos del mercado.</p>
                        <button>
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                        <div className="modal-diplome">
                            <div className="content-modal">
                                <button>
                                    <FontAwesomeIcon icon={faEyeSlash} size="2x"/>
                                </button>
                                <img src={DiplomaTecnico} alt="Diploma Tecnico" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="info-education">
                    <div className="info-rute">
                        <h4>Sena</h4>
                        <p>En proceso <span className="color-date">Agt 2019 - Actualidad</span></p>
                        <img src={Sena} alt="Academlo"/>
                    </div>
                    <div className="description-rute">
                        <h4>Analisis y Desarrollo de Sistemas de Informacion</h4>
                        <p>El programa Tecnólogo en Análisis y Desarrollo de Sistemas de Información se creó para brindar al sector productivo nacional en general (debido a que la Industria del Software aplica para la mejora de los procesos productivos en todos los sectores ya sea industria, comercio, servicios, sector primario y extractivo, etc).</p>
                        <button>
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="info-education">
                    <div className="info-rute">
                        <h4>Sena</h4>
                        <p>Finalizado <span className="color-date">Sep 2017 - Sep 2018</span></p>
                        <img src={Sena} alt="Academlo"/>
                    </div>
                    <div className="description-rute">
                        <h4>Tecnico en Sistemas</h4>
                        <p>El programa de técnico en sistemas, está pensado para formar personal calificado en las áreas de redes sociales, mantenimiento de equipos de cómputo y redes de computadores, donde se ha detectado que las empresas requieren soporte básico en el día a día de su operación.</p>
                        <button>
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    </div>
                </div>
            </article>
            <Footer />
        </section>
    );
};

export default Education;