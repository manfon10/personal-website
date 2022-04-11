import React from 'react';
import foto from '../../assets/img/foto-web.jpg';
import { Footer } from '../../components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faServer
} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import './about-style.css';

const About = () => {

    return (
        <section className="container-about">
            <Helmet>
                <title>MF | Home</title>
            </Helmet>
            <article className="information">
                <div>
                    <h1>Soy Manuel Fonseca</h1>
                    <h2><span className="color-profesion">Web</span> Developer</h2>
                </div>
                <img src={foto} alt="" />
            </article>
            <article className="about-me">
                <div>
                    <h2>Acerca de Mi</h2>
                    <p>Mi nombre es Manuel Fonseca, Desarrollador Web Junior surgiendo en el mundo del Desarrollo de software, tengo conocimientos en el area de Fronted y Infraestructura, usando las herramientas mas actuales del mercado, cada dia aprendiendo mas sobre como utlizarlas y poder desarrollar productos con buenas practicas.</p>
                </div>
            </article>
            <article className="knowledge">
                <div>
                    <FontAwesomeIcon icon={faCode} size="3x" color="#E74C3C"/>
                    <h4>Web Development</h4>
                    <p>Sin experiencia</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faServer} size="3x" color="#E74C3C"/>
                    <h4>Infraestructure</h4>
                    <p>Con experiencia</p>
                </div>
            </article>
            <article className="about-me">
                <div>
                    <p>Estare dispuesto a asumir nuevos retos donde pueda poner mis capacidades y conocimientos al limite, para poder lograr objetivos para mi y por lo tanto donde me desempeñe.</p>
                </div>
            </article>
            <Footer />
        </section>
    );
};

export default About;