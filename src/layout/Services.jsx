import React from "react";
import Servicecard from "./Servicecard";
// import { NavLink } from "react-router-dom"


const Services = ( )=>{
    return(
<>
<main id="main">


    <section  className="services">
      <div className="container ">

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <Servicecard />
       

          

        </div>

      </div>
    </section>

  </main>

</>

    );
}
export default Services;
