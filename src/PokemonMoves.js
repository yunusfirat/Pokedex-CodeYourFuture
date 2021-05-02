import React, { useState, useEffect } from "react";

function PokemonMoves({ pokemonId }) {
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		console.log("Hello world!");

		fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
		)
			.then((res) => res.json())
			.then((data) => {
				setPokemonData(data);
			});
	}, [pokemonId]);

	return (
		<div>
			{pokemonData ? <>
				<p>{pokemonData.name}'s moves:</p>
				<ul>
					{pokemonData.moves.map((move, index) => {
						return <li key={index}>{move.move.name}</li>;
					})}
				</ul>
			</> : <span>Loading</span>
			}

		</div>
	);
}

export default PokemonMoves;
