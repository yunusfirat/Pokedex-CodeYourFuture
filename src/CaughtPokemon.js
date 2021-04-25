/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";


function CaughtPokemon(props) {
	const [caught, setCaught] = useState([]);

	const catchPokemon = () => {
	 let pokemonNames = ["pikachu","Butterfree","Ditto","Spearow"];
	 let x = Math.floor((Math.random() * pokemonNames.length));
	 setCaught(caught.concat(pokemonNames[x]));

	};


	return (
		<div>
			<p>Caught {caught.length} Pokemon on {props.date}</p>
			<div><button onClick={catchPokemon}>Catch Pokemon</button></div>
			<ul>
				{caught.map((element, index) => {
					return(
						<li key={index}>{element}</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CaughtPokemon;