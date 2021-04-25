/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";


function CaughtPokemon(props) {
	const [caught, setCaught] = useState(0);

	const catchPokemon = () => {
	 setCaught((caught) => caught + 1);

	};
	return (
		<div style= {{ display:"flex" } }>
			<p>Caught {caught} Pokemon on {props.date}</p>
			<button onClick={catchPokemon}>Catch Pokemon</button>
		</div>
	);
}

export default CaughtPokemon;