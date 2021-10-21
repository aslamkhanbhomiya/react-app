import React from "react";
import { NavLink } from "react-router-dom"

const Home = ( )=>{
    return(
<>
<section id="hero" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <h1>Kelly Adams</h1>
            <h2>I'm a professional illustrator from San Francisco</h2>
<NavLink to='/about' className="btn-about">About Me</NavLink>
           
        </div>
    </section>

</>

    );
}
export default Home;
