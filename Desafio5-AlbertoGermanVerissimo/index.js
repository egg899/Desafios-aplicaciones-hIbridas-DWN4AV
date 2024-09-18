import express from 'express';
import autoresRoutes from "./routes/autorRoutes.js";
import librosRoutes from "./routes/librosRoutes.js";



const app = express();
const PORT = 300;

app.use(express.json());

//autores
app.use('/autores', autoresRoutes);

//libros
app.use('/libros', librosRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));