import React from "react";

import logo from "../../assets/logo-in8-dev.svg";

import "./homeStyles.css";

export const Home = () => {
	return (
		<div className="container">
			<section className="banner">
				<header>
					<img id="logo" src={logo} alt="logo" />
					<nav className="navbar">
						<ul>
							<li>
								<a href="">cadastro</a>
							</li>
							<li>
								<a href="">lista</a>
							</li>
							<li>
								<a href="">sobre min</a>
							</li>
						</ul>
					</nav>
				</header>
        <div className="banner-text">
          <h1>ESTÁGIO</h1>
          <h3>PROVA DE SELEÇÃO</h3>
        </div>
			</section>

    <section id="registration">
      
    </section>

		</div>
	);
};
