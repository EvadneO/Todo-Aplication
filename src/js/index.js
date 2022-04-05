//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Controlador from "./component/controlador";

//import your own components
import Controlador from "./component/controlador.jsx";

//render your react application
ReactDOM.render(<Controlador />, document.querySelector("#app"));
