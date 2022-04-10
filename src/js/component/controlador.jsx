import React, { useState } from "react";

function Control() {
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);

	const lista = (hola) => {
		hola.preventDefault();
		setTareas([...tareas, tarea]);
	};

	const eliminar = (key) => {
		setTareas(tareas.filter((item, index) => index !== key));
		console.log(key);
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center">TAREAS</h1>
			<div className="row">
				<div className="col-10">
					<form onSubmit={lista}>
						<input
							type="text"
							className="form-control mb-2"
							placeholder="Ingrese Tarea"
							onChange={(e) => setTarea(e.target.value)}
							value={tarea}
						/>
						<ul className="list-group">
							{tareas.map((li, key) => (
								<li className="list-group-item" key={key}>
									{li}s
								</li>
							))}
							{tareas.map((li, key) => (
								<span
									className="close"
									onClick={() => eliminar(key)}>
									<button type="button" class="btn btn-dark">
										Eliminar
									</button>
								</span>
							))}
						</ul>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Control;
