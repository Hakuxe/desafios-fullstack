import axios from "axios";

const URL = "http://localhost:3030";
const api = axios.create({ baseURL: URL });

export async function getAllUsers(): Promise<User[]> {
	try {
		const response = await api.get("/all");
		return await response.data;
	} catch (error) {
		console.error(error);
		throw new Error("Erro chamada da api de cadastro");
	}
}

export async function createUser(newUser: User) {
	try {
		const response = await api.post("/user", newUser);
		return response;
	} catch (error) {
		console.log(error);
		throw new Error("Erro ao cadastrar usuário");
	}
}
