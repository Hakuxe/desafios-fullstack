import axios from "axios";

const URL = "http://localhost:3030";
const api = axios.create({ baseURL: URL });

type User = {
	id: number;
	name: string;
	email: string;
	birthDate: Date;
	phone: number;
};

export async function getAllUsers(): Promise<User[]>{

   try{
      const response = await api.get("/all");
      return await response.data;
      
   }catch(error){
      console.error(error);
      throw new Error('Erro chamada da api de cadastro');
   }
}
