import React from "react";
import { Link } from "react-router-dom";

function RenderList({ obj }) {
	let ingredients = [];
	let measurements = [];

	for (const [key, value] of Object.entries(obj)) {
		if (key.slice(0, 13) === `strIngredient`) {
			ingredients.push(value);
		}
		if (key.slice(0, 10) === `strMeasure`) {
			measurements.push(value);
		}
	}
	// console.log(measurements);
	// console.log(ingredients);
	return (
		<>
			<div>
				<h4>Ingredients </h4>
				<ul>
					{ingredients.map((ingredient, index) => {
						if (ingredient) {
							return (
								<li>
									<Link to>{ingredient}</Link>
									<span>-{measurements[index]}</span>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</>
	);
}

export default RenderList;
