import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

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

const Header = styled.div`
	display: flex;
	height: 400px;
	background-color: #480032;
	color: white;
	padding: 20px;
`;
const HeadImg = styled.div`
	height: 100%;
`;
const HeadItem = styled.div`
	height: 100%;
	width: 100%;
`;

const Body = styled.div``;

function Details() {
	let ingredients = [];
	let measurements = [];
	const { id } = useParams();
	const { loading, data } = useQuery(GET_DETAILS, {
		variables: { id: parseInt(id) },
	});
	console.log(loading, data?.getDrinksById[0]);
	const renderList = (obj) => {
		for (const [key, value] of Object.entries(obj)) {
			if (key.slice(0, 13) === `strIngredient`) {
				ingredients.push(value);
			}
			if (key.slice(0, 10) === `strMeasure`) {
				measurements.push(value);
			}
		}
		console.log(measurements);
		console.log(ingredients);
		return (
			<>
				<div>
					<ul>
						{measurements.map((each) => {
							if (each) return <li>{each}</li>;
						})}
					</ul>
				</div>
				<div>
					{ingredients.map((each) => {
						if (each) return <li>{each}</li>;
					})}
				</div>
			</>
		);
	};

	return (
		<>
			{!loading && (
				<>
					<Header>
						<HeadImg>
							<img
								style={{ height: "100%" }}
								src={data.getDrinksById[0].strDrinkThumb}
								alt={data.getDrinksById[0].idDrink}
							/>
						</HeadImg>
						<HeadItem>
							<h1>{data.getDrinksById[0].strDrink}</h1>
							<div>
								<div>sfdalk</div>
								<ul>
									<li>
										<p>date</p>
									</li>
									<li>
										<p>glass</p>
									</li>
								</ul>
							</div>
						</HeadItem>
					</Header>
					<Body>
						<div>{renderList(data.getDrinksById[0])}</div>
					</Body>
				</>
			)}
		</>
	);
}

export default Details;
