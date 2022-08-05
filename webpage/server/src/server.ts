import express from "express";

import database from "./database/data";

const PORT = 3030;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log("server rodando..."));


app.get("/all", (request, response) => {
	response.json(database);
});

app.post("/user", (request, response) =>{
   const {user} = request.body;

   const newItem = {
      id: database.length + 1,
		name: user.name,
		birthDate: new Date(user.birthDate),
		phone: user.phone,
		email: user.email,
   }

   database.push(newItem);

   response.send("Cadastro realizado com sucesso");

})
