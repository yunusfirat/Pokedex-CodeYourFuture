import React from "react";



const PokemonInfo = ( { match }) => {

	return (
		<div>
			<h1>Pokemoninfo: {match.params.name}</h1>
		</div>
	);
};

export default PokemonInfo;