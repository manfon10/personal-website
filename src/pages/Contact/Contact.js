import React, { useState } from 'react';
import { Footer } from '../../components';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMap,
    faEnvelope,
    faMobile
} from '@fortawesome/free-solid-svg-icons';
import GoogleMaps from 'simple-react-google-maps';
import emailjs from 'emailjs-com';
import './contact-style.css';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ messageSuccess, setMessageSuccess ] = useState("");
    const [ messageError, setMessageError ] = useState("");

    const submit = (data, e) => {
        e.preventDefault();

        emailjs.send("service_7hxljcs", "template_bwws5ba", {
            message: data.message,
            subject: data.subject,
            name: data.name,
            email: data.email
        }, "ub71sVzX8-soISThB").then( result => {
            setMessageSuccess("Información enviada, pronto me pondre en contacto.");
        }, error => {
            setMessageError("Ocurrio un error inesperado, intente nuevamente por favor.");
        });
    }

    return (
        <section className="container-contact">
            <Helmet>
                <title>MF | Contact</title>
            </Helmet>
            <article className="container-information-contact">
                <div>
                    <h2>Dejame tu información</h2>
                        <div className="information-contact">
                            <form onSubmit={handleSubmit(submit)}>
                                <label htmlFor="Nombre">Nombre</label>
                                <input type="text" {...register("name", { required: true })}/>
                                {
                                    errors?.name?.type === 'required' && (
                                        <p className="filed-required">Este campo es obligatorio.</p>        
                                    )
                                }
                                <label htmlFor="Correo">Correo Electronico</label>
                                <input type="email" {...register("email", { required: true })}/>
                                {
                                    errors?.email?.type === 'required' && (
                                        <p className="filed-required">Este campo es obligatorio.</p>        
                                    )
                                }
                                <label htmlFor="Asunto">Asunto</label>
                                <input type="text" {...register("subject", { required: true })}/>
                                {
                                    errors?.subject?.type === 'required' && (
                                        <p className="filed-required">Este campo es obligatorio.</p>        
                                    )
                                }
                                <label htmlFor="Mensaje">Mensaje</label>
                                <textarea cols="30" rows="10" {...register("message", { required: true })}></textarea>
                                {
                                    errors?.message?.type === 'required' && (
                                        <p className="filed-required">Este campo es obligatorio.</p>        
                                    )
                                }
                                <button>Enviar</button>
                            </form>
                            {
                                messageSuccess && ( 
                                    <div className="messageSuccess"><p>{messageSuccess}</p></div> 
                                )
                            }
                            {
                                messageError && (
                                    <div className="messageError"><p>{messageError}</p></div>
                                )
                            }
                    </div>
                </div>
                <div>
                    <h2>Información de Contacto</h2>
                        <div className="information-contact-plus">
                            <div>
                                <FontAwesomeIcon icon={faMap} />
                                <p>Pais: <span>Colombia</span></p>
                                <p>Ciudad: <span>Bogotá</span></p>
                                <p></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>Correo: <span>manueldazafon@gmail.com</span></p>
                                <p>WhatsApp: <span>+57 3222229886</span></p>
                                <p>Telegram: <span>@manufonse</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMobile} />
                                <p>Celular: <span>+57 3222229886</span></p>
                            </div>
                        </div>
                </div>
            </article>
            <article style={{ marginTop: '20px'}}>
                <GoogleMaps 
                    apiKey={"AIzaSyD8KKJcb22k5Dhh8JBus8SvzGft6rrmuJ0"}
                    style={{ height: "400px", width: "auto"}}
                    zoom={12}
                    center={{
                        lat: 4.701542685284096,
                        lng: -74.12086366314976
                    }}
                    markers={[
                        { lat: 4.701542685284096, lng: -74.12086366314976 }
                    ]}
                />
            </article>
            <Footer />
        </section>
    );
};

export default Contact;