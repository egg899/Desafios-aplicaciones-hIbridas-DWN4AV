import http from "http";
import { readFile } from "fs/promises";
import os from "os";
import path from "path";


const PORT = 3000;

const server = http.createServer(async(req, res) => {
    // console.log("url", req.url);
    // console.log("method", req.method);
    // console.log("url", req.headers);
    // const filePath = path.join('./', 'index.html');
    // console.log("filePath", filePath);

    switch(req.method) {
        case 'GET':
            if(req.url === '/') {
                // Handle 404 Not Found
                res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Pagina principal');
            }
            else if(req.url === '/alumno') {
                res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8' });
                res.end('Alumno: Alberto Germán Verissimo, Comisión:W0D44')
            }//alumno
            else if(req.url === '/info') {
                const osInfo = {
                    platform:os.platform(),
                    architecture: os.arch(),
                    cores: os.cpus().length,
                    memory:os.totalmem(),
                    uptime:os.uptime()    
                };
                res.writeHead(200, {'Content-Type':'application/json'});
                res.end(JSON.stringify(osInfo));
            }//info
            else if(req.url === '/static') {
                try {
                    const data = await readFile('index.html', 'utf-8');
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                } catch (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Error al leer el archivo');
                    console.error(err);
                }
            }
            
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