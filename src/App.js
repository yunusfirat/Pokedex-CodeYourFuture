import React from "react";

function CaughtPokemon() {
	let date = new Date().toLocaleDateString();
	return (
		<div>
			<p>Caught 0 Pokemon on {date}</p>
		</div>
	);
}



function Logo() {
	let appName = "yunus`s pokedex";
	return (
		<div>
			<header>
				<h1>Welcome to the {appName}</h1>
				<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex"></img>
			</header>
		</div>
	);
}

function BestPokemon() {
	let abilities = ["Anticipation", "Adaptability", "Run-Away"];
	return (
		<p>My favorite Pokemon is Squirtle
			<ul>
				{abilities.map((ability) => {
					return (
						<li>{ability}</li>
					);
				})}
			</ul>
		</p>
	);
}
function App() {
	return (
		<div>
			<Logo />
			<BestPokemon />
			<CaughtPokemon />
		</div>
	);
}


export default App;
