import express from "express";
import cors from "cors";

import database from "./database/data";

const PORT = 3030;
const app = express();

// app.use(cors); 
app.use(express.json());

app.listen(PORT, () => console.log("server rodando..."));


app.get("/all", (request, response) => {
	response.json(database);
});

