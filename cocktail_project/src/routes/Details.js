import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RenderSlider from "../components/RenderSlider";

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

		getRandomSelection {
			strDrink
			idDrink
			strDrinkThumb
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
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 100%;
	padding: 30px;
`;

const Body = styled.div`
	padding: 35px;
	background-color: #ffc288;
	border-radius: 4px;
	text-align: center;
	height: 308px;
`;

const Container = styled.div`
	height: 100%;
	overflow: hidden;
`;

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
	};

	return (
		<>
			{!loading && (
				<Container>
					<Header>
						<HeadImg>
							<img
								style={{ height: "100%" }}
								src={data?.getDrinksById[0].strDrinkThumb}
								alt={data?.getDrinksById[0].idDrink}
							/>
						</HeadImg>
						<HeadItem>
							<div>
								<h1>{data?.getDrinksById[0].strDrink}</h1>
								<p>{`Category: ${data?.getDrinksById[0].strCategory}`}</p>

								<p>{`Alcoholic: ${data?.getDrinksById[0].strAlcoholic}`}</p>

								<p>{`Served Glass: ${data?.getDrinksById[0].strGlass}`}</p>
							</div>
							<div>{renderList(data?.getDrinksById[0])}</div>
						</HeadItem>
					</Header>
					<div
						style={{
							position: "absolute",
							left: "47%",
							bottom: "278px",
							textAlign: "center",
						}}
					>
						<span>What else?</span>
					</div>
					<Body>
						<RenderSlider randomSelection={data?.getRandomSelection} />
					</Body>
				</Container>
			)}
		</>
	);
}

export default Details;
