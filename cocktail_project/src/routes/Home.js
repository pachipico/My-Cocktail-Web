import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_POPULAR_DRINKS = gql`
	{
		getPopularDrinks {
			strDrink
			idDrink
			strDrinkThumb
		}
	}
`;

const Container = styled.div`
	background-color: #480032;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Header = styled.div`
	color: white;
`;

function Home() {
	const { loading, data } = useQuery(GET_POPULAR_DRINKS);
	console.log(loading, data);
	return (
		<Container>
			<Header>What would you like to drink?</Header>
			{/* use carousel render random 5 popular cocktails */}
		</Container>
	);
}

export default Home;
