import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RenderSlider from "./RenderSlider";

const Head = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	width: 80%;
	height: 400px;
	text-align: center;
`;

function Header({ getRandomSelection }) {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
	};

	const SlideCard = styled.div`
		border-radius: 8px 8px;
		justify-content: center;
	`;

	return (
		<Head>
			<h3>This website will help you find the best Coctail for you!</h3>
			<br />
			<h4>How about these?</h4>

			<div style={{ width: "90%" }}>
				<RenderSlider randomSelection={getRandomSelection} />
			</div>
		</Head>
	);
}

export default Header;
