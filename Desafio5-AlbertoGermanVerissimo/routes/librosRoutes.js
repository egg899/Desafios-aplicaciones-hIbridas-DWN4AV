import express from "express";
import { agarrarTodosLibros, agarrarLibroPorId, crearLibro, actualizarLibro,  borrarLibro } from "../controllers/librosControllers.js";

const router = express.Router();

router.get('', agarrarTodosLibros);
router.get('/:id', agarrarLibroPorId);
router.post('', crearLibro);
router.put('/:id/', actualizarLibro);
router.delete('/:id', borrarLibro);

export default router;