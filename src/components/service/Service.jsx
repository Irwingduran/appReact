import React, { useState } from 'react';
import "./service.css";

const Service = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
<section className="services section" id="service">
<h2 className="section__title">Servicios</h2>
       <span className="section__subtitle-edit">
        Una mejor alternativa para construir su plataforma web es un desarrolador web independiente. <br /> 
        Interactúas directamente con el desarrollador de tu proyecto, sin intermediarios que <br/>
        no entienden como ayudarlo rápidamente.
         </span>
        
        <div className="services__container container grid">

        <div className="services__content">  
            <div>
            <i className="uil uil-web-grid services__icon"></i> 
                <h3 className="services__title">Aplicación <br /> Web</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title">Creación de sitios web</h3>
            <p className="services__modal-description">
            Plataforma diseñada para adaptarse a sus objetivos comerciales.
            </p>

            <ul className="services__modal-services grid">
            <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Diseño y desarrollo de interfaz.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Aplicación web o Aplicación estática.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                       Implemetación de tecnologías nuevas y seguras.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Soporte para intalación.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    3 semanas de soporte técnico gratuito.
                    </p>
                </li>
                </ul>
                </div>

            </div>
        </div>

        <div className="services__content">
         
            <div>
            <i className="uil uil-database services__icon"></i> 
                <h3 className="services__title">Alojamiento <br /> Web</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            <h3 className="services__modal-title">Hosting</h3>
            <p className="services__modal-description">
                Permite que tu página web sea visto por cualquier usuario con conexión a Internet.
            </p>
            <ul className="services__modal-services grid">
                
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                       Precios accesibles (menual o anual).
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Seguridad y velocidad para su Aplicación web.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Bases de datos.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Para proyectos grandes o pequeños.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                       3 meses gratis.
                    </p>
                </li>
                </ul>
                </div>
            </div>
        </div>
 


        <div className="services__content">
            <div>
            <i className="uil uil-edit services__icon"></i> 
                <h3 className="services__title">Mantenimiento <br /> Web</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Que su sitio 
                    web de su empresa sea mucho más de lo que nunca pensó.</h3>
            <p className="services__modal-description">
                
            </p>
            <ul className="services__modal-services grid">
            <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Me encargo de brindarle mantenimiento y soporte a su plataforma ya existente.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Detección de posibles vulnerabilidades de seguridad.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Como y cuando me necesite (pague por hora, por día o por más tiempo).
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Asesoría gratuita.
                    </p>
                </li>
                </ul>
                

                </div>
            </div>
       
        </div>
        </div>
              
</section>

  )
}

export  default Service