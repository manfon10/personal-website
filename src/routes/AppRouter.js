import React from 'react';
import { About, Contact, Education, Projects, Trajectory } from '../pages';
import { MainLayaut } from '../components';
import { HashRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={ <MainLayaut /> } >
                    <Route path="/" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/education" element={ <Education /> } />
                    <Route path="/trajectory" element={ <Trajectory /> } />
                    <Route path="/projects" element={ <Projects /> } />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;