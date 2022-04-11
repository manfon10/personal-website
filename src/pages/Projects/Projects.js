import React from 'react';
import { Footer } from '../../components';
import { WeatherApp, RiackAndMorty, CrudApp, PokedexApp, EcommerceApp } from '../../assets/img';
import { Helmet } from 'react-helmet';
import './projects-style.css';

const Projects = () => {
    return (
        <section className="container-projects">
            <Helmet>
                <title>MF | Projects</title>
            </Helmet>
            <article className="title-projects">
                <h2>Proyectos</h2>
            </article>
            <article className="projects-container">
                <div className="container-image-project">
                    <img src={WeatherApp} alt="" />
                        <div class="info-app">
                            <h2>Weather App</h2>
                            <button>Ver App</button>
                            <div>
                                <i class="fab fa-html5 fa-lg"></i>
                                <i class="fab fa-css3-alt fa-lg"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-js-square fa-lg"></i>
                                <i class="fab fa-git-alt fa-lg"></i>
                                <i class="fab fa-font-awesome-alt fa-lg"></i>
                            </div>
                        </div>
                </div>
                <div>
                    <img src={RiackAndMorty} alt="" />
                        <div class="info-app">
                            <h2>Rick And Morty App</h2>
                            <button>Ver App</button>
                            <div>
                                <i class="fab fa-html5 fa-lg"></i>
                                <i class="fab fa-css3-alt fa-lg"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-js-square fa-lg"></i>
                                <i class="fab fa-git-alt fa-lg"></i>
                                <i class="fab fa-font-awesome-alt fa-lg"></i>
                            </div>
                        </div>
                </div>
                <div>
                    <img src={CrudApp} alt="" />
                        <div class="info-app">
                            <h2>Crud App</h2>
                            <button>Ver App</button>
                            <div>
                                <i class="fab fa-html5 fa-lg"></i>
                                <i class="fab fa-css3-alt fa-lg"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-wpforms"></i>
                                <i class="fab fa-js-square fa-lg"></i>
                                <i class="fab fa-git-alt fa-lg"></i>
                                <i class="fab fa-font-awesome-alt fa-lg"></i>
                            </div>
                        </div>
                </div>
                <div>
                    <img src={PokedexApp} alt="" />
                        <div class="info-app">
                            <h2>Pokedex App</h2>
                            <button>Ver App</button>
                            <div>
                                <i class="fab fa-html5 fa-lg"></i>
                                <i class="fab fa-css3-alt fa-lg"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-wpforms"></i>
                                <i class="fab fa-js-square fa-lg"></i>
                                <i class="fab fa-git-alt fa-lg"></i>
                                <i class="fab fa-font-awesome-alt fa-lg"></i>
                                <i class="fab fa-browser"></i>
                            </div>
                        </div>
                </div>
                <div>
                    <img src={EcommerceApp} alt="" />
                        <div class="info-app">
                            <h2>Ecommerce App</h2>
                            <button>Ver App</button>
                            <div>
                                <i class="fab fa-html5 fa-lg"></i>
                                <i class="fab fa-css3-alt fa-lg"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-wpforms"></i>
                                <i class="fab fa-js-square fa-lg"></i>
                                <i class="fab fa-git-alt fa-lg"></i>
                                <i class="fab fa-font-awesome-alt fa-lg"></i>
                                <i class="fab fa-browser"></i>
                                <i class="fab fa-database"></i>
                            </div>
                        </div>
                </div>
            </article>
            <Footer /> 
        </section>
    );
};

export default Projects;