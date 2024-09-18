import { todosLosLibros, librosPorId } from "../models/librosModel.js";

export const agarrarTodosLibros = (req, res) => {
    const libros = todosLosLibros();
    res.json(libros);
}//agarrarTodosLibros

export const agarrarLibroPorId = (req, res) => {
    const libroId = parseInt(req.params.id);
    const libro = librosPorId(libroId);

    if(libro){
        res.json(libro);
    }else{
        res.status(404).json({error:"libro no encontrado"});
    }

}//agarrarLibroPorId


export const crearLibro = (req, res) => {
    let libros = todosLosLibros();
    const nuevoLibro = {
        id: libros.length > 0 ? libros.length + 1 : 1,
        nombre: req.body.nombre,
        autor: req.body.autor
    }//nuevoAutor

    libros.push(nuevoLibro);
    //escribirLibroFile(libros);
    res.status(201).json(nuevoLibro);
}//crearLibro


export const actualizarLibro = (req, res) => {
    const libroId = parseInt(req.params.id);
    const libros = todosLosLibros();
    const libroIndex = libros.findIndex(libro => libro.id === libroId);

    if(libroIndex !== -1){
        libros[libroIndex] = {id:libroId, ...req.body};
        //escribirLibroFile(libros);
        res.status(200).json(libros[libroIndex]);
    } else {
        res.status(404).json({message: "Libro no encontrado"})
    }
}//actualizarLibro

export const borrarLibro = ( req, res ) => {
    const libroId = parseInt(req.params.id);
    let libros = todosLosLibros();
    const libroIndex = libros.findIndex(libro => libro.id === libroId);
    if(libroIndex !==-1){
        libros.splice(libroIndex, 1);
        //escribirLibroFile(libros);
        res.status(204).json();
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
}//borrarLibro

