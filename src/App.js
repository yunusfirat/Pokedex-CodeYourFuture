import React from "react";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";

function App() {
	let abilities = ["Anticipation", "Adaptability", "Run-Away"];
	let date = new Date().toLocaleDateString();
	return (
		<div>
			<Logo appName="Pokedex" />
			<BestPokemon abilities={abilities}/>
			<CaughtPokemon  date={date}/>
		</div>
	);
}


export default App;
