import React from "react";
import styled from "styled-components";

function Card({ drink }) {
	const DrinkContent = styled.span`
		font-family: cursive;
		font-size: 15px;
		text-decoration: none;
	`;

	const DrinkCard = styled.div`
		height: 150px;
		width: 120px;
	`;
	const DrinkImg = styled.img`
		height: 140px;
		width: 120px%;
		border-radius: 8px;
	`;

	return (
		<DrinkCard>
			<DrinkImg src={drink.strDrinkThumb} key={drink.idDrink} />
			<DrinkContent>{drink.strDrink}</DrinkContent>
		</DrinkCard>
	);
}

export default Card;
