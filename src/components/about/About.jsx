import React from 'react';
import "./about.css";
import AboutImg from "../../media/ai_me2.jpg";
import Info from "./Info";

const About = () => {
  return (
   <section className="about section" id="about">
       <h2 className="section__title">Sobre Mí </h2>
       <span className="section__subtitle">
       Soy un desarrollador mexicano con la misión y visión de ayudar 
       a dar el salto a todos <br/> aquellos negocios que desean modernizar y 
       adaptarse a los nuevos tiempos. <br /> 
</span>

       <div className="about__container container grid">
           <img src={AboutImg} alt="" className="about__img" />
           <div className="about__data">
               < Info />
       
           <p className="about__description">
          Con la tecnología, uno mismo puede hacer sus instrumentos, incluso 
         también nuevos formatos. <br/>
         Me dedico a crear plataformas que funcinan a través de Internet y puedan
         brindar una mejor calidad a sus clientes o una mejor administración
          (incluyendo el monitoreo en tiempo real). 
           </p>

           </div>
       </div>


   </section>
  )
}

export default About;