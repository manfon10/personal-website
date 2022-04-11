import React from 'react';
import NecImahe from '../../assets/img/nec.jpg';
import SolItImage from '../../assets/img/sol-it.jpg';
import AecsaImage from '../../assets/img/aecsa.jpg';
import { Footer } from '../../components';
import { Helmet } from 'react-helmet';
import './trayectory-style.css';

const Trajectory = () => {
    return (
        <section className="container-trajectory">
            <Helmet>
                <title>MF | Trayectory</title>
            </Helmet>
            <article className="title-trayectory">
                <h2>Trayectoria</h2>
            </article>
            <article className="resumen-experience">
                <p>A lo largo de mi experiencia me e desempeñado en varios cargos en el area de Infraestructura y Soporte Tecnico.</p>
            </article>
            <article className="container-experience">
                <article>
                    <div className="image-experience">
                        <img src={NecImahe} alt="Nec de Colombia" />
                    </div>
                    <div>
                        <h3>Infraestructure Technician</h3>
                        <p>NEC de Colombia - Jornada completa</p>
                        <p style={{ opacity: '0.7'}}>nov. 2021 - actualidad</p>
                        <p style={{ opacity: '0.7'}}>Bogotá, Distrito Capital, Colombia</p>
                    </div>
                </article>
                <div className="separator"></div>
                <article>
                    <div className="image-experience">
                        <img src={SolItImage} alt="Sol-IT" />
                    </div>
                    <div>
                        <h3>Tecnico de Soporte Jr.</h3>
                        <p>SOL-IT S.A.S - Jornada completa</p>
                        <p style={{ opacity: '0.7'}}>sep. 2019 - nov. 2021</p>
                        <p style={{ opacity: '0.7'}}>Bogotá, Distrito Capital, Colombia</p>
                    </div>
                </article>
                <div className="separator"></div>
                <article>
                    <div className="image-experience image-aecsa">
                        <img src={AecsaImage} alt="Aecsa" />
                    </div>
                    <div>
                        <h3>Analista de Redes y Telecomunicaciones</h3>
                        <p>AECSA</p>
                        <p style={{ opacity: '0.7'}}>Bogotá, Distrito Capital, Colombia</p>
                        <p style={{ opacity: '0.7'}}>may. 2019 - ago. 2019</p>
                    </div>
                </article>
            </article>
            <Footer />
        </section>
    );
};

export default Trajectory;