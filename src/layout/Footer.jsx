import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ( )=>{
    return(
<>
<footer id="footer">
        <div class="container">
            <div class="copyright">
                © Copyright <strong><span>Kelly</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
             
                Designed by <NavLink to="https://bootstrapmade.com/">BootstrapMade</NavLink>
            </div>
        </div>
    </footer>

</>

    );
}
export default Footer;
