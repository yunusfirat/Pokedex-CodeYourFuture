/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";


function CaughtPokemon(props) {
	const [caught, setCaught] = useState([]);
	const [pokemonNameInput, setpokemonNameInput] = useState("");
	const [pokemonObject, setPokemonObject] = useState({
		pokemonname:"",
	});

	const catchPokemon = () => {
	//  let pokemonNames = ["pikachu","Butterfree","Ditto","Spearow"];
	//  let x = Math.floor((Math.random() * pokemonNames.length));
		pokemonNameInput ? setCaught(caught.concat(pokemonNameInput)) || setpokemonNameInput("") : alert("you can not add empty value");

	};
	const catchPokemonTwo = () => {
		pokemonObject ? setCaught(caught.concat(pokemonObject)) || setPokemonObject("") : alert("you can not add empty value");
	};

	const handleInputChange = (event) => {
		setpokemonNameInput(event.target.value);

	};

	const handleInputChangetwo = (event) => {
		const updatedPokemon = {
			...pokemonObject,
			[event.target.name] : event.target.value,
		};
		setPokemonObject(updatedPokemon);
	};

	return (
		<div>
			<p>Caught {caught.length} Pokemon on {props.date}</p>
			<input
			 type="text"
			 value={pokemonNameInput}
			 onChange={handleInputChange}
			 />
			 <input
			 type="text"
			 name="pokemonname"
			 placeholder="Pokemon name"
			 value={pokemonObject.pokemonname}
			 onChange={handleInputChangetwo}

			 />
			<div><button onClick={catchPokemon}>Catch Pokemon</button></div>
			<div><button onClick={catchPokemonTwo}>Catch Pokemon two</button></div>
			<ul>
				{caught.map((element, index) => {
					return(
						<li key={index}>{typeof element === "string" ? element : element.pokemonname}</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CaughtPokemon;