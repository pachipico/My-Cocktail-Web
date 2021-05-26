import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_DETAILS = gql`
	query getDrinksById($id: Int!) {
		getDrinksById(id: $id) {
			strDrink
			strDrinkThumb
			strCategory
			strAlcoholic
			strGlass
			strInstructions
			strIngredient1
			strIngredient2
			strIngredient3
			strIngredient4
			strIngredient5
			strIngredient6
			strIngredient7
			strIngredient8
			strMeasure1
			strMeasure2
			strMeasure3
			strMeasure4
			strMeasure5
			strMeasure6
			strMeasure7
			strMeasure8
			dateModified
		}
	}
`;

function Details() {
	const [drink, setDrink] = useState({});
	const { id } = useParams();
	const { loading, data } = useQuery(GET_DETAILS, {
		variables: { id: parseInt(id) },
	});
	console.log(loading, data);

	return (
		<div>
			<h1> {loading ? "Loading..." : `${data.getDrinksById[0].strDrink}`} </h1>
		</div>
	);
}

export default Details;
