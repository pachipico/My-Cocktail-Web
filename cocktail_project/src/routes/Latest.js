import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_LATEST_DRINKS = gql`
	{
		getLatestDrinks {
			idDrink
			strDrinkThumb
			strDrink
			dateModified
		}
	}
`;

const Container = styled.div``;

const Header = styled.div`
	margin-top: 50px;
	text-align: center;
`;
const Body = styled.div`
	padding: 50px;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-gap: 20px;
`;
const Card = styled.div`
	text-align: center;
`;
function Latest() {
	const { loading, data } = useQuery(GET_LATEST_DRINKS);

	return (
		<>
			{!loading && (
				<Container>
					<Header>
						<h1>Latest</h1>
					</Header>
					<Body>
						{data.getLatestDrinks.map((drink, i) => {
							return (
								<Card>
									<Link to={`/details/${drink.idDrink}`}>
										<img
											style={{
												width: "100%",
												marginBottom: "10px",
												borderRadius: "5px",
											}}
											src={drink.strDrinkThumb}
											alt={drink.idDrink}
										/>

										<span>{drink.strDrink}</span>
										<span>{drink.dateModified}</span>
									</Link>
								</Card>
							);
						})}
					</Body>
				</Container>
			)}
		</>
	);
}

export default Latest;
