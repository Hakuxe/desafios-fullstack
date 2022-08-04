import React, { useState } from "react";
import { RegistrationForm } from "../../components/RegistrationFrom/RegistrationFrom";

import logo from "../../assets/logo-in8-dev.svg";

import "./homeStyles.css";

type User = {
	id: number;
	name: string;
	email: string;
	birthDate: Date;
	phone: number;
};


const bd = [
	{
		id: 1,
		name: "afdfadf",
		birthDate: new Date(),
		phone: 31000000000,
		email: "fafdsf#@gmgialjaf",
	},
	{
		id: 2,
		name: "afdfadf",
		birthDate: new Date(),
		phone: 31000000000,
		email: "fafdsf#@gmgialjaf",
	},
]
export const Home = () => {
	const [users, setUsers] = useState<User[]>(bd);

	return (
		<main className="container">
			<section className="banner page-padding">
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

			<section id="registration" className="page-padding">
				<h2 className="section-title">CADASTRO</h2>
				<RegistrationForm />
			</section>

			<section id="registrationList" className="page-padding">
				<h2 className="section-title">LISTA DE CADASTRO</h2>

				<table>
					<thead>
						<th></th>
						<th>Nome</th>
						<th>Email</th>
						<th>Nascimento</th>
						<th>Telefone</th>
					</thead>
					<tbody>
						{users.map(user => {
							return(
								<tr>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.birthDate.toUTCString()}</td>
									<td>{user.phone}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</section>

			<footer>
				<div>
					<p>Fulano Beltrano Oliveira Silva</p>
					<p>fulanobos@gmail.com</p>
					<p>(31)99666-1111</p>
					<p>Faculdade de Belo Horizonte</p>
				</div>
			</footer>
		</main>
	);
};
