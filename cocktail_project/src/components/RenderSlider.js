import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

function RenderSlider({ randomSelection }) {
	const SlideCard = styled.div`
		border-radius: 8px 8px;
		justify-content: center;
		text-align: center;
		margin: 0, 5px;
	`;

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
	};
	return (
		<>
			<Slider {...settings}>
				{randomSelection &&
					randomSelection.map((drink, i) => {
						return (
							<SlideCard key={i}>
								<Link to={`/details/${drink.idDrink}`}>
									<img
										style={{
											borderRadius: "6px",
											height: "240px",
											width: "100%",
											padding: " 0, auto",
										}}
										src={drink.strDrinkThumb}
										alt={drink.idDrink}
									/>
									<i style={{ textDecoration: "none" }}>{drink.strDrink}</i>
								</Link>
							</SlideCard>
						);
					})}
			</Slider>
		</>
	);
}

export default RenderSlider;
