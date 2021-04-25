/* eslint-disable */
import React from "react";

function Logo(props) {

	return (
		<div>
			<header>
				<h1>Welcome to the {props.appName}</h1>
				<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex" onClick={() => props.logWhenClicked('how are you ?')}></img>
			</header>
		</div>
	);
}

export default Logo;