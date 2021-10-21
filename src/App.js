import {Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/css/style.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
// import "./assets/vendor/aos/aos.css"
// import "./assets/vendor/aos/aos.js"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import About from "./layout/About";
import Resume from "./layout/Resume";
import Services from "./layout/Services";
import Contact from "./layout/Contact";
import Notfound from "./layout/Notfound";

function App() {
  return (
  <>
  <Header />
  <Switch>
  <Route exact path='/' component={Home} ><Home /> </Route>
  <Route exact  path='/about' component={About} ><About /> </Route>
  <Route exact  path='/resume' component={Resume} ><Resume /> </Route>
  <Route exact  path='/services' component={Services} ><Services /> </Route>
  <Route exact  path='/contact' component={Contact} ><Contact /> </Route>
  <Route component={Notfound} />
  </Switch>
 <Footer />


  </>
  );
}

export default App;
