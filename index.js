/*este código inicia un servidor que al ser llamado en la dirección
* Seleccionada, devuelve el mensje de la línea 13
*/
console.log("Aprendiendo Github Actions")


const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('"Aprendiendo Github Actions"');
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor en funcionamiento en <http://localhost:3000/>');
});
