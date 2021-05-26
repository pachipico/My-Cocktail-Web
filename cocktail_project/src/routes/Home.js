import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";

const GET_DRINKS = gql`
	{
		getRandomSelection {
			strDrink
			idDrink
			strDrinkThumb
		}
		getOneRandomDrink {
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

const Body = styled.div``;

function Home() {
	const { loading, data } = useQuery(GET_DRINKS);

	console.log(data, loading);

	return (
		<Container>
			{data && <Header getRandomSelection={data?.getRandomSelection} />}
			<Body></Body>
		</Container>
	);
}

export default Home;
