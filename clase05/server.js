var http = require("http");
var url = require("url");

function iniciar(route, handle) {
    function onRequest(request, response) {
        var ruta = url.parse(request.url).pathname;
        route(ruta, handle);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Hola Mundo");
        response.write("<p>Peticion para " + ruta + " RECIBIDA.</p>")
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;