import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
<section className="skills section" id="skills">
<h2 className="section__title">Skills</h2>
       <span className="section__subtitle">
       Mis habilidades en el desarrollo de aplicaciones web (front end y back end), <br/>
       me permite crear soluciones completas y eficientes. Tengo experiencia en el <br/>
       desarrollo de interfaces de usuario atractivas y en el manejo de servidores  <br/>
       y bases de datos para proporcionar una experiencia de usuario fluida. 
</span>
<div className="skills__container container grid">
< Frontend />
< Backend />
</div>
</section>  
  )
}

export default Skills
