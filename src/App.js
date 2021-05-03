import React from "react";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

function App() {
	let abilities = ["Anticipation", "Adaptability", "Run-Away"];
	let date = new Date().toLocaleDateString();

	const logWhenClicked = (param) => {
		console.log("hello world", param);
	};
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/bestpokemon">best pokemon</Link>
						</li>
						<li>
							<Link to="/caughtpokemon">caught pokemon</Link>
						</li>
						<li>
							<Link to="/pokemon/Pikachu">Pikachu</Link>
						</li>
						<li>
							<Link to="/pokemon/Balbazar">Balbazar</Link>
						</li>
					</ul>

				</nav>
				<Logo logWhenClicked={logWhenClicked} appName="Pokedex" />
				<Route
					path="/bestpokemon/"
					render={() => <BestPokemon abilities={abilities} />}
				/>
				<Route
					path="/caughtpokemon/"
					render={() => <CaughtPokemon date={date} />}
				/>
				<Route path="/pokemon/:name" component={PokemonInfo} />
				<PokemonMovesSelector />
				<PokemonCity />
			</div>

		</BrowserRouter>
	);
}


export default App;
