import { autores } from "../data/autores.js";

export const todosLosAutores = () => {
    return autores;
}

export const autoresPorId = (id) => {
    return autores.find((autor) => autor.id === id);
}