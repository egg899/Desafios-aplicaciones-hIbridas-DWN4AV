import http from "http";
import fs from "fs";
import os from "os";
import path from "path";


const PORT = 3001;

const server = http.createServer((req, res) => {
    // console.log("url", req.url);
    // console.log("method", req.method);
    // console.log("url", req.headers);


    switch(req.method) {
        case 'GET':
            if(req.url === '/alumno') {
                res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8' });
                res.end('Alumno: Alberto Germán Verissimo, Comisión:W0D44')
            }//alumno
            else if(req.utl === '/info') {
                const osInfo = {
                    platform:os.platform(),
                    architecture: os.architecture(),
                    cores: os.cpus().length,
                    memory:os.totalmem(),
                    uptime:os.uptime()    
                };
                res.writeHead(200, {'Content-Type':'application/json'});
                res.end(JSON.stringify(osInfo));
            }//info

            else if(req.url === '/static') {
                const filePath = path.join(__dirname, 'index.html');
                fs.readFile(filePath, (err, content) => {
                    if(err){
                        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                        res.end('Error al leer el archivo');
                    } else {
                        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                        res.end(content);
                    }
                })
            }//static
            else {
                // Handle 404 Not Found
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Ruta no encontrada');
            }
            break;


    }//switch


});//SERVER


server.listen(PORT, () => {
    console.log(`Servidor escuchado en http://localhost:${PORT}`);
})