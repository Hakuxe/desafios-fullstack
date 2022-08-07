import burguerMenuOpen from "../../assets/icons/hamburguer-aberto0.svg";

import "./mobileNavbarStyles.css";

type Props = {
	handleToggleMenu: () => void;
};

export const MobileNavbar = (props: Props) => {
	return (
		<nav id="burguerMenuOpen" className="mobile-navbar">
			<ul>
				<li className="menu-button">
					<img
						src={burguerMenuOpen}
						id="burguerMenu"
						alt="abrir menu"
						onClick={props.handleToggleMenu}
					/>
				</li>
				<li>
					<a href="#registrationList">lista</a>
				</li>
				<li>
					<a href="#about">sobre min</a>
				</li>
				<li>
					<a href="#registration">cadastro</a>
				</li>
			</ul>
		</nav>
	);
};
