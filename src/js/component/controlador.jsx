import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Controlador = () => {
	return (
<div className="controlador">
<div className="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Escribe aquí" aria-describedby="button-addon2"/>
  <button class="btn-close" disabled aria-label="Close" type="button" id="button-addon2"></button>
</div>
		</div>
	);
};

export default Controlador;
