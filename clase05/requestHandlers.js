function inicio() {
    console.log("Manipulador de petición 'inicio' ha sido llamado.");
}

function contacto() {
    console.log("Manipulador de petición 'contacto' ha sido llamado.");
}

function error404() {
    console.log("Recursos no encontrados.");
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.error404 = error404;