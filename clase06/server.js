var http = require("http");
var url = require("url");

function iniciar(route, handle) {
    function onRequest(request, response) {
        var ruta = url.parse(request.url).pathname;
        var contenido = route(ruta, handle);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(contenido);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;