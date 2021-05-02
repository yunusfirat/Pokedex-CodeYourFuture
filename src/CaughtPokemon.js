/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";


function CaughtPokemon(props) {
	const [caught, setCaught] = useState([]);
	const [pokemonNameInput, setpokemonNameInput] = useState("");

	const catchPokemon = () => {
	//  let pokemonNames = ["pikachu","Butterfree","Ditto","Spearow"];
	//  let x = Math.floor((Math.random() * pokemonNames.length));
		pokemonNameInput ? setCaught(caught.concat(pokemonNameInput)) || setpokemonNameInput("") : alert("you can not add empty value");

	};
	const handleInputChange = (event) => {
		setpokemonNameInput(event.target.value);

	};

	return (
		<div>
			<p>Caught {caught.length} Pokemon on {props.date}</p>
			<input
			 type="text"
			 value={pokemonNameInput}
			 onChange={handleInputChange}
			 />
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