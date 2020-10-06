const http = require('http')

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-type': 'application/json' })
    let salida = {
            nombre: 'Diego',
            url: req.url

        }
        //resp.write('Hola mundo!!!!!')
    resp.write(JSON.stringify(salida))
    resp.end()
}).listen(8080)

console.log('Escuchando en el puerto 8080');