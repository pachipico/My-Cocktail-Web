import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
	const Navbar = styled.header`
		background-image: linear-gradient(-20deg, #810034, #ff005c, #fff600);
		height: 10vh;
		color: #4a1c40;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		width: 100%;
	`;

	const NavLeft = styled.div`
		padding-left: 30px;
		justifycontent: left;
	`;

	const NavMiddle = styled.div`
		font-size: 3rem;
		font-weight: bold;
		text-align: center;
		font-family: zillaslab, palatino, "Palatino Linotype", serif;
	`;

	const NavItem = styled.div`
		padding: 10px 15px;
	`;
	const NavRight = styled.div`
		padding-right: 30px;
		display: flex;
		justify-content: flex-end;
	`;

	return (
		<Navbar>
			<NavLeft>
				<Link to='/'>Home</Link>
			</NavLeft>
			<NavMiddle>🍸The Coctails🍸</NavMiddle>
			<NavRight>
				<NavItem>
					<Link to='/popular'>Popular</Link>
				</NavItem>
				<NavItem>
					<Link to='/latest'>Latest</Link>
				</NavItem>
			</NavRight>
		</Navbar>
	);
}

export default NavBar;
