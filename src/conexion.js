const { error } = require('console');
const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('DEMO'));

app.use('/assets', express.static('assets'));
app.use('/assets/css', express.static('assets/css'));
app.use('/assets/js', express.static('assets/js'));
app.use('/assets/img', express.static('assets/img'));
app.use('/assets/pages', express.static('assets/pages'));

const conexion = mysql.createConnection({
    host: "localhost",
    database: "josecarlosmariategui",
    user: "root",
    password: "admin",
});

conexion.connect(function (err) {
    if (err) {
        throw error;
    } else {
        console.log("Conexion exitosa")
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**Principales */
app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "../index.html");
    res.sendFile(filePath);
});
app.get("/Admision.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Admision.html");
    res.sendFile(filePath);
});

app.get("/Galeria.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages//Galeria.html")
    res.sendFile(filePath)
})

app.get("/Noticias.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages//Noticias.html");
    res.sendFile(filePath);
});

/**Sección Nosotros */
app.get("/Nosotros/Historia.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Nosotros/Historia.html");
    res.sendFile(filePath);
});

app.get("/Nosotros/Ideario.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Nosotros/Ideario.html")
    res.sendFile(filePath);
});

app.get("/Nosotros/MisionyVision.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Nosotros/Mision-Vision.html")
    res.sendFile(filePath);
});

app.get("/Nosotros/PlanaDocente.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Nosotros/Plana-Docente.html")
    res.sendFile(filePath);
});

app.get("/Nosotros/GestionAcademica.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Nosotros/Gestion-Academica.html")
    res.sendFile(filePath);
});

/**Sección Calendario */
app.get("/Calendario/Actividades.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Calendario/Actividades.html")
    res.sendFile(filePath);
});
app.get("/Calendario/EventosInstitucionales.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Calendario/Eventos-Institucionales.html")
    res.sendFile(filePath);
});
app.get("/Calendario/Horarios.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Calendario/Horarios.html")
    res.sendFile(filePath);
});

/**Sección Académicos */

app.get("/Academicos/Primaria.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Académicos/Primaria.html")
    res.sendFile(filePath);
});

app.get("/Academicos/Secundaria.html", function (req, res) {
    var filePath = path.join(__dirname, "../assets/pages/Académicos/Secundaria.html")
    res.sendFile(filePath);
});


/**Validar Formulario */

app.post("/validar", function (req, res) {
    const datos = req.body;
    let nombres = datos.nombres;
    let apellidos = datos.apellidos;
    let email = datos.email;
    let telefono = datos.telefono;
    let asunto = datos.subject;
    let mensaje = datos.message;

    let registrar = "INSERT INTO FORMULARIO (nombres, apellidos, email, telefono, asunto, mensaje) VALUES ('" + nombres + "','" + apellidos + "','" + email + "','" + telefono + "','" + asunto + "','" + mensaje + "')";

    conexion.query(registrar, function (error) {
        if (error) {
            throw error
        } else {
            console.log("Datos normales")
        }
    });
});

app.listen(port, function () {
    console.log("El servidor está funcionando en http://localhost:" + port);
});
