import { libros } from "../data/libros.js";

export const todosLosLibros = () => {
    return libros;
}

export const librosPorId = (id) => {
    return libros.find((libro) => libro.id === id);
}