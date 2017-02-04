function inicio() {
    console.log("Manipulador de petición 'inicio' ha sido llamado.");
    return "Pagina de Inicio";
}

function contacto() {
    console.log("Manipulador de petición 'contacto' ha sido llamado.");
    return "Marie Curie, 10 - PTA Campanillas (Malaga)";
}

function error404() {
    console.log("Recursos no encontrados.");
    return "404: Compruebe que ha escrito bien la ruta en el navegador.";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.error404 = error404;