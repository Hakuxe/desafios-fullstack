import logo from "../../assets/logo-in8-dev.svg";

import burguermenu from "../../assets/icons/hamburguer.svg";
import burguerMenuOpen from "../../assets/icons/hamburguer-aberto0.svg";

import "./headerStyles.css";

export const Header = () => {
	return (
		<header>
         <img src={burguermenu} id="burguerMenu" alt="" />
			<img id="logo" src={logo} alt="logo" />
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
		</header>
	);
};
