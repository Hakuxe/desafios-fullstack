import { useState } from "react";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";

import logo from "../../assets/logo-in8-dev.svg";
import burguerMenu from "../../assets/icons/hamburguer.svg";
import burguerMenuOpen from "../../assets/icons/hamburguer-aberto0.svg";

import "./headerStyles.css";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu(){
		setIsMenuOpen((prevState) => !prevState)
	}

	return (
		<header>
			<img
				src={isMenuOpen ? burguerMenuOpen : burguerMenu}
				id="burguerMenu"
				alt=""
				onClick={toggleMenu}
			/>
			<img id="logo" src={logo} alt="logo" />
			{!isMenuOpen ? (
				<nav className="navbar">
					<ul>
						<li>
							<a href="#registration">cadastro</a>
						</li>
						<li>
							<span className="dot">●</span>
						</li>
						<li>
							<a href="#registrationList">lista</a>
						</li>
						<li>
							<span className="dot">●</span>
						</li>
						<li>
							<a href="#about">sobre min</a>
						</li>
					</ul>
				</nav>
			) : (
				<MobileNavbar handleToggleMenu={toggleMenu}/>
			)}

			{/* <MobileNavbar /> */}
		</header>
	);
};
