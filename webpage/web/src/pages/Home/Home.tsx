import React, { useState, useEffect } from "react";

import { RegistrationForm } from "../../components/RegistrationFrom/RegistrationFrom";
import { Header } from "../../components/Header/Header";

import { createUser, getAllUsers } from "../../services/api.service";

import topoPg from "../../assets/icons/topo-pag.svg";

import "./homeStyles.css";

export const Home = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [shouldUpdateList, setShouldUpdateList] = useState(false);

	useEffect(() => {
		async function setDataUsers() {
			const data = await getAllUsers();
			if (data) {
				setUsers(data);
			}
		}
		setDataUsers();
	}, []);

	useEffect(() => {
		async function setDataUsers() {
			const data = await getAllUsers();
			if (data) {
				setUsers(data);
			}
		}
		setDataUsers();
	}, [shouldUpdateList]);

	async function handleCreateNewUser(newUser: User) {
		const response = await createUser(newUser);

		if (response.status === 200) {
			setShouldUpdateList((prevState) => !prevState);
			alert(response.data);
		}
	}

	return (
		<main className="container">
			<section id="hero" className="page-padding">
				<Header />

				<div className="banner-text">
					<h1>ESTÁGIO</h1>
					<h3>PROVA DE SELEÇÃO</h3>
				</div>
			</section>

			<section id="registration" className="page-padding">
				<h2 className="section-title">CADASTRO</h2>
				<RegistrationForm handleCreateNewUser={handleCreateNewUser} />
			</section>

			<section id="registrationList" className="page-padding">
				<h2 className="section-title">LISTA DE CADASTRO</h2>

				<table>
					<thead>
						<tr>
							<th></th>
							<th>Nome</th>
							<th>Email</th>
							<th>Nascimento</th>
							<th>Telefone</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => {
							return (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.birthDate}</td>
									<td>{user.phone}</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<a id="buttonGoTopPage" href="#hero">
					<img src={topoPg} alt="" />
				</a>
			</section>

			<footer id="about">
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
