import React from 'react';
import "./footer.css";






const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Irwing Durán</h1>

        <ul className="footer__list">
          <li><a href="#home" className="footer__link">Inicio</a></li>
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="https" className="footer__link">EDITALO </a></li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/byirwing/" className="home__social-icon" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@irwingdurann" className="home__social-icon" target="_blank">
            <i class="bx bxl-tiktok"></i>
          </a>
          <a href="https://www.linkedin.com/in/irwingduran-b7259423b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADu1ZoYBYKnD6ZDzM8JX2bxpqgQl4OPM42g&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BEspKlAbsQ76d3yZVvQeYZw%3D%3D&original_referer=" className="home__social-icon" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; 2023 - Todos los derechos resevados
        </span>
      </div>
    </footer>)
}



export default Footer