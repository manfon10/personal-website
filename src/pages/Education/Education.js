import React, { useState } from 'react';
import { Footer } from '../../components';
import { SenaImage, AcademloImage, DiplomaTecnico, UdemyImage } from '../../assets/img';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import './education-style.css';

const Education = () => {

    const [ hidden, setHidden ] = useState("hidden");

    return (
        <section className="container-education">
            <Helmet>
                <title>MF | Education</title>
            </Helmet>
            <article className="title-education">
                <h2>Educación</h2>
            </article>
            <article className="rute-education">
                <div className="info-education">
                    <div className="info-rute">
                        <h4>Academlo</h4>
                        <p>En proceso <span className="color-date">Oct 2021 - Actualidad</span></p>
                        <img src={AcademloImage} alt="Academlo"/>
                    </div>
                    <div className="description-rute">
                        <h4>Web Full-Stack</h4>
                        <p>El programa Web Full-Stack se creó para brindar conocimientos en el area de Desarrollo Web Full-Stack con los lenguajes mas modernos del mercado.</p>
                        <button>
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="info-education">
                    <div className="info-rute">
                        <h4>Sena</h4>
                        <p>En proceso <span className="color-date">Agt 2019 - Actualidad</span></p>
                        <img src={SenaImage} alt="Academlo"/>
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
                        <img src={SenaImage} alt="Academlo"/>
                    </div>
                    <div className="description-rute">
                        <h4>Tecnico en Sistemas</h4>
                        <p>El programa de técnico en sistemas, está pensado para formar personal calificado en las áreas de redes sociales, mantenimiento de equipos de cómputo y redes de computadores, donde se ha detectado que las empresas requieren soporte básico en el día a día de su operación.</p>
                        <button onClick={ () => setHidden("visible")}>
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                        <div className="modal-diplome" style={{ visibility: `${hidden}`}}>
                            <div className="content-modal">
                                <button onClick={ () => setHidden("hidden")}>
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </button>
                                <img src={DiplomaTecnico} alt="Diploma Tecnico" />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="title-education">
                <h2>Certificaciones</h2>
            </article>
            <article className="container-certificates">
                <div>
                    <img src={UdemyImage} alt="Udemy Curso" />
                    <h4>JavaScript Moderno</h4>
                    <p>En proceso</p>
                </div>
                <div>
                    <img src={UdemyImage} alt="Udemy Curso" />
                    <h4>React: De cero a experto ( Hooks y MENS )</h4>
                    <p>En proceso</p>
                </div>
            </article>
            <Footer />
        </section>
    );
};

export default Education;