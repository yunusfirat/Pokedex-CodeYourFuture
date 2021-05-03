import React, { useState, useEffect } from "react";



const PokemonInfo = ({ match }) => {
	const [pokemonData, setPokemonData] = useState(null);
	useEffect(() => {
		console.log("Hello world!", match.params.name);

		fetch(
			`https://pokeapi.co/api/v2/pokemon/${match.params.name}/`,
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPokemonData(data);
			});
	}, [match]);

	return (
		<div>
			{pokemonData ? <>
				<p>{pokemonData.base_experience}'s moves:</p>
				<p>Name: {pokemonData.forms[0].name}</p>
			</> : <span>Loading</span>
			}

		</div>
	);
};

export default PokemonInfo;