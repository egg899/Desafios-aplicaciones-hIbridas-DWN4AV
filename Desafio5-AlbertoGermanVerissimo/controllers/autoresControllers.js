import { todosLosAutores, autoresPorId } from "../models/autoresModel.js";

export const agarrarTodosAutores = (req, res) => {
    const autores = todosLosAutores();
    res.json(autores);
}//agarrarTodosAutores

export const agarrarAutoresPorId = (req, res) => {
    const autoresId = parseInt(req.params.id);
    const autor = autoresPorId(autoresId);

    if(autor){
        res.json(autor);
    }else{
        res.status(404).json({error:"autor no encontrado"});
    }

}//agarrarAutoresPorId


export const crearAutor = (req, res) => {
    let autores = todosLosAutores();
    const nuevoAutor = {
        id: autores.length > 0 ? autores.length + 1 : 1,
        nombre: req.body.nombre,
        
    }//nuevoAutor

    autores.push(nuevoAutor);
    //escribirAutorFile(autores);
    res.status(201).json(nuevoAutor);
}//crearAutor


export const actualizarAutor = (req, res) => {
    const autorId = parseInt(req.params.id);
    const autores = todosLosAutores();
    const autorIndex = autores.findIndex(autor => autor.id === autorId);

    if(autorIndex !== -1){
        autores[autorIndex] = {id:autorId, ...req.body};
        //escribirAutorFile(autores);
        res.status(200).json(autores[autorIndex]);
    } else {
        res.status(404).json({message: "Autor no encontrado"})
    }
}//actualizarAutor

export const borrarAutor = ( req, res ) => {
    const autorId = parseInt(req.params.id);
    let autores = todosLosAutores();
    const autorIndex = autores.findIndex(autor => autor.id === autorId);
    if(autorIndex !==-1){
        autores.splice(autorIndex, 1);
        //escribirAutorFile(autores);
        res.status(204).json();
    } else {
        res.status(404).json({ message: "Autor no encontrado" });
    }
}//borrarAutor

