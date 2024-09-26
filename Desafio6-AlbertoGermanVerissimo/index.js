import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const secretKey = "miclave";

const PORT = 3000;



app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));




let usuarios = [

];

function validateBody(req, res, next) {
    if(req.method === "POST" || req.method === "PUT" ){
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({mensaje: "El cuerpo de la solicitud no puede estar vacio"});
        }
    }
    next();
}//validateBody



const auth = (req, res, next) => {
    const getToken = req.headers.authorization;

    if(getToken){
        const token = getToken.split(" ")[1];
        jwt.verify(token, secretKey, (err, payload) => {
            if(err) {
                return res.sendStatus(403);
            }
            req.user = {id: payload.id, email:payload.email};
            next();
        })
    }//if getToken

}//auth


app.use(validateBody);


app.get('/usuarios',(req, res) => {
    res.json(usuarios);
})
app.post('/usuarios', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).send("Los campos son obligatorios");
    }

    const newPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = {
        id:usuarios.length + 1,
        email,
        password: newPassword
    }//nuevoUsuario

    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);


});//post ususario -> Aqui metemos a los usuarios

//Momento de hacer el login
app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = usuarios.find(u => u.email === email);
    console.log(user);
    if(!user){
        return res.status(404).send({message: "Usuario no encontrado"});
    }//!user
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(password);
    console.log(user.password);
    console.log(validPassword);

    if(!validPassword){
        return res.status(401).json({ message: "password incorrecto" });
    }//!validPassword

    
    const token = jwt.sign({ id:user.id, email: user.email }, secretKey, { expiresIn: "1h" });

    res.status(200).json({ token });

})// post --> /login


app.get('/protected', auth, (req, res) => {
    //res.json({ message: "Esta es una ruta protegida", user: req.user });
    res.sendFile(path.join(__dirname,'public', "index.html"));

});


// Ruta para servir archivos estáticos
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'public', "index.html"));
});


app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,'public', "about.html"));
});

app.listen(PORT, () => {
    console.log(`Servidos ecuchado en puerto http://localhost:${PORT}`);
})