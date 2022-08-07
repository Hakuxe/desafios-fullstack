import React, {
	ChangeEvent,
	useState,
} from "react";

import "./styles.css";

type Props = {
	handleCreateNewUser: (newUser: User) => void;
};

export const RegistrationForm = (props: Props) => {
	const [formData, setFormData] = useState<User>({
		name: "",
		email: "",
		birthDate: "",
		phone: 0,
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		// console.log(event);
		const { name, value } = event.target;

		console.log(name, value)
		setFormData((prevFormData) => {
			return { ...prevFormData, [name]: value };
		});
	}

	return (
		<form
			action=""
			onSubmit={(event) => {
				event.preventDefault();
				console.log(formData)
				props.handleCreateNewUser(formData);
			}}
		>
			<fieldset className="input-group">
				<label htmlFor="name">Nome</label>
				<input id="name" name="name" type="text" onChange={handleChange} />
			</fieldset>

			<fieldset className="input-group">
				<label htmlFor="email">E-mail</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className="input-group">
				<label htmlFor="birthdate">Nascimento</label>
				<input
					id="birthDate"
					name="birthDate"
					type="date"
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className="input-group">
				<label htmlFor="phone">Telefone</label>
				<input
					id="phone"
					name="phone"
					type={"tel"}
					onChange={handleChange}
				/>
			</fieldset>

			<button className="btn-registration">CADASTRAR</button>
		</form>
	);
};
