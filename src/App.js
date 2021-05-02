import React from "react";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
function App() {
	let abilities = ["Anticipation", "Adaptability", "Run-Away"];
	let date = new Date().toLocaleDateString();

	const logWhenClicked = (param) => {
		console.log("hello world", param);
	};
	return (
		<div>
			<Logo 	logWhenClicked ={logWhenClicked}	appName="Pokedex" />
			<BestPokemon abilities={abilities}/>
			<CaughtPokemon  date={date}/>
			<PokemonMovesSelector />
			<PokemonCity />
		</div>
	);
}


export default App;
