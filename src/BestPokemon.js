import React from "react";


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

export default BestPokemon;