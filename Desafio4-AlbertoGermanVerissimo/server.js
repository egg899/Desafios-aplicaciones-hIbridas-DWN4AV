//Parte 1
import express from "express";

const app = express();
app.use(express.json());
// app.get("*", (req, res) => {
//     const url = req.path;
   
//     if(url === "/"){
//         res.send("Alumno: Alberto Germán Verissimo");
//     } else if(url === "/materia") {
//         res.send(`La materia es: Aplicaciones Web Hibridas<br> Se dan los Martes y los Miercoles<br> de 9:10 PM a 11:00 PM`);
    
//     } else if (url === "/profesor"){
//         res.send("Profesora: Camila Belén Marcos Galban");
//     }
//     else {
//         res.status(404).send("Página no encontrada");
//     }
// });

//Parte 2
// let peliculas = ["Volver al Futuro", "El Mundo Según Wayne", "Rambo", "Rocky", "Terminator"];

// app.get('/peliculas/:nombre', (req, res) => {
//     const nombrePelicula = req.params.nombre;

//     const peliculaEncontrada = peliculas.find(pelicula => pelicula === nombrePelicula);
//     if(!peliculaEncontrada) return res.status(404).send('404 - peliculas no encontrada');
    
//     res.json('La pelicula ' + peliculaEncontrada + ' ya se encuentra en favoritos');
  
// });

//Parte 3

const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Smartphone', precio: 500 },
    { id: 3, nombre: 'Tablet', precio: 300 },
    { id: 4, nombre: 'Headphones', precio: 150 },
    { id: 5, nombre: 'Keyboard', precio: 50 },
    { id: 6, nombre: 'Mouse', precio: 30 },
    { id: 7, nombre: 'Monitor', precio: 200 },
    { id: 8, nombre: 'Printer', precio: 120 },
    { id: 9, nombre: 'Webcam', precio: 70 },
    { id: 10, nombre: 'External Hard Drive', precio: 80 }
  ];


//   app.get('/productos', (req, res) => {
//     res.json(productos)
//   })

app.get('/productos', (req, res) => {
    const { id, min, max } = req.query;
  
    // Handle 'id' query parameter
    if (id) {
      const productoSolicitado = productos.find(producto => producto.id === parseInt(id));
  
      if (!productoSolicitado) {
        return res.status(404).send('Producto no encontrado');
      }
  
      return res.json(productoSolicitado);
    }
  
    let productosFiltrados = productos;
    if ( min || max ) {

        const minPrecio = min ? parseInt(min) : Number.MIN_VALUE;
        const maxPrecio = max ? parseInt(max) : Number.MAX_VALUE;
       
        

        productosFiltrados = productos.filter(producto => {
            if(min && !max) {
                return producto.precio >= minPrecio;
            }else if(!min && max) {
                return producto.precio <= maxPrecio;
            } else if(min && max) {
                if(min >=max){
                    return res.status(400).send('Error: min debe ser menor que max');  //Error si min es mayor o igual a max
                }

                return producto.precio >= minPrecio && producto.precio <= maxPrecio;

            } 
            return true;
        });



    }//IF MIN || MAX
  
    
    res.json(productosFiltrados);
    


      

  
    // If no query parameters are provided, return all products
    res.json(productos);
  });






const PORT = 3000;
app.listen(PORT, () => console.log("server running on port http://localhost:3000"));