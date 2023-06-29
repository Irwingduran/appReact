import React, { useContext } from 'react';
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Scrollup from "../scrollup/Scrollup";




const Developer = () => {

  return (
    <>
    <section>
< Header />
<main className="main">
< Home />
< About />
< Skills />
< Service />
< Contact />
</main>
< Footer />
< Scrollup />
</section>
</>
  )
}

export default Developer