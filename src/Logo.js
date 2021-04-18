import React from "react";

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

export default Logo;