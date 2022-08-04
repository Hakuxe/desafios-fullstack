import "./styles.css";
export const RegistrationForm = () => {
	return (
		<form action="">
			<fieldset className="input-group">
				<label htmlFor="name">Nome</label>
				<input id="name" type="text" />
			</fieldset>

			<fieldset className="input-group">
				<label htmlFor="email">E-mail</label>
				<input id="email" type="email" />
			</fieldset>

			<fieldset className="input-group">
				<label htmlFor="birthdate">Nascimento</label>
				<input id="birthdate" type="date" />
			</fieldset>

			<fieldset className="input-group">
				<label htmlFor="phone">Telefone</label>
				<input id="phone" type={"tel"}/>
			</fieldset>

			<button className="btn-registration">CADASTRAR</button>
		</form>
	);
};
