import express from "express";

import database from "./database/data";

const PORT = 3030;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log("\nserver rodando..."));


app.get("/all", (request, response) => {
	response.json(database);
});

app.post("/user", (request, response) =>{
   const {name, email, phone, birthDate} = request.body;

   const newItem = {
      id: database.length + 1,
		name: name,
		birthDate: new Date(birthDate),
		phone: phone,
		email: email,
   }

   database.push(newItem);

   response.send("Cadastro realizado com sucesso");

})
