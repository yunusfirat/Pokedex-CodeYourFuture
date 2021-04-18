import React from "react";


function CaughtPokemon() {
	let date = new Date().toLocaleDateString();
	return (
		<div>
			<p>Caught 0 Pokemon on {date}</p>
		</div>
	);
}

export default CaughtPokemon;