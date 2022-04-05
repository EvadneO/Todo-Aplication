import React from "react";

import './App.css';

function Control() {
  return (
    <div className="Root">
     <div className="controlador">
     <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipients username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>

  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#my-offcanvas" aria-label="Close"></button>
</div>
		</div>
    </div>
  );
}

export default Control;
