import express from "express";
import { agarrarTodosAutores, agarrarAutoresPorId, crearAutor, actualizarAutor,  borrarAutor } from "../controllers/autoresControllers.js";

const router = express.Router();

router.get('', agarrarTodosAutores);
router.get('/:id', agarrarAutoresPorId);
router.post('', crearAutor);
router.put('/:id/', actualizarAutor);
router.delete('/:id', borrarAutor);

export default router;