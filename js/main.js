
const seriesGrid = document.getElementById("series-grid");

const formularioBusqueda = document.getElementById("formulario-busqueda");

const inputBusqueda = document.getElementById("busqueda");

const estado = document.getElementById("estado");

const destacadaContenido = document.getElementById("destacada-contenido");

const modal = document.getElementById("modal");

const modalDetalles = document.getElementById("modal-detalles");

const cerrarModal = document.getElementById("cerrar-modal");



//=============================================================
// MOSTRAR Y OCULTAR MENSAJES
//=============================================================

const mostrarMensaje = (mensaje, esError = false) => {
    estado.textContent = mensaje;

    estado.classList.add("estado--visible");

    if (esError === true) {
        estado.classList.add("estado--error");
    } else {
        estado.classList.remove("estado--error");
    }
};


const ocultarMensaje = () => {
    estado.textContent = "";

    estado.classList.remove("estado--visible");
    estado.classList.remove("estado--error");
};




//=============================================================
// CREAR TARJETA DE SERIE
//=============================================================


const crearTarjetaSerie = (serie) => {

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("serie-card");


    //--------------------------------------------------------------

    const imagenContenedor = document.createElement("div");
    imagenContenedor.classList.add("serie-card__imagen-contenedor");

    const imagen = document.createElement("img");
    imagen.classList.add("serie-card__imagen");
    if (serie.image !== null) {
        imagen.src = serie.image.medium;
    } else {
        imagen.src = "https://via.placeholder.com/210x295?text=Sin+imagen";
    }

    imagen.alt = serie.name;

    imagenContenedor.appendChild(imagen);


    //--------------------------------------------------------------


    const contenido = document.createElement("div");
    contenido.classList.add("serie-card__contenido");

    const nombre = document.createElement("h3");
    nombre.classList.add("serie-card__nombre");
    nombre.textContent = serie.name;


    const genero = document.createElement("p");
    genero.classList.add("serie-card__genero");
    if (serie.genres.length > 0) {
        genero.textContent = serie.genres.join(" · ");
    } else {
        genero.textContent = "Sin genero disponible";
    }

    //--------------------------------------------------------------


    const informacion = document.createElement("div");
    informacion.classList.add("serie-card__informacion");


    const calificacion = document.createElement("p");
    calificacion.classList.add("serie-card__calificacion");
    if (serie.rating.average !== null) {
        calificacion.textContent = "★ " + serie.rating.average;
    } else {
        calificacion.textContent = "Sin calificacion";
    }

    const estadoDeSerie = document.createElement("p");
    estadoDeSerie.classList.add("serie-card__estado");
    estadoDeSerie.textContent = serie.status;


    informacion.appendChild(calificacion);
    informacion.appendChild(estadoDeSerie);


    //--------------------------------------------------------------

    const botonDetalles = document.createElement("button");
    botonDetalles.classList.add("serie-card__boton");
    botonDetalles.type = "button";
    botonDetalles.textContent = "Ver detalles";

    botonDetalles.addEventListener("click", () => {
        mostrarDetalles(serie);
    });

    //--------------------------------------------------------------

    contenido.appendChild(nombre);
    contenido.appendChild(genero);
    contenido.appendChild(informacion);
    contenido.appendChild(botonDetalles);

    tarjeta.appendChild(imagenContenedor);
    tarjeta.appendChild(contenido);

    return tarjeta;
};


//=============================================================
// MOSTRAR SERIE DESTACADA
//=============================================================

const mostrarSerieDestacada = (serie) => {
    destacadaContenido.innerHTML = "";

    const imagen = document.createElement("img");
    imagen.classList.add("destacada__imagen");

    if (serie.image !== null) {
        imagen.src = serie.image.original;
        imagen.alt = serie.name;

        destacadaContenido.appendChild(imagen);
    }

    const informacion = document.createElement("div");
    informacion.classList.add("destacada__informacion");

    const nombre = document.createElement("h2");
    nombre.classList.add("destacada__nombre");
    nombre.textContent = serie.name;

    const generos = document.createElement("p");
    generos.classList.add("destacada__generos");

    if (serie.genres.length > 0) {
        generos.textContent = serie.genres.join(" · ");
    } else {
        generos.textContent = "Sin género disponible";
    }

    const detalles = document.createElement("div");
    detalles.classList.add("destacada__detalles");

    const calificacion = document.createElement("p");
    calificacion.classList.add("destacada__calificacion");

    if (serie.rating.average !== null) {
        calificacion.textContent =
            "★ " + serie.rating.average;
    } else {
        calificacion.textContent = "Sin calificación";
    }

    const estadoSerie = document.createElement("p");
    estadoSerie.classList.add("destacada__estado");
    estadoSerie.textContent = serie.status;

    detalles.appendChild(calificacion);
    detalles.appendChild(estadoSerie);

    informacion.appendChild(nombre);
    informacion.appendChild(generos);
    informacion.appendChild(detalles);

    destacadaContenido.appendChild(informacion);
};



//=============================================================
// MOSTRAR DETALLES EN EL MODAL
//=============================================================

const mostrarDetalles = (serie) => {
    modalDetalles.innerHTML = "";

    const imagen = document.createElement("img");
    imagen.classList.add("modal-serie__imagen");

    if (serie.image !== null) {
        imagen.src = serie.image.original;
    } else {
        imagen.src = "https://via.placeholder.com/400x550?text=Sin+imagen";
    }

    imagen.alt = serie.name;

    const informacion = document.createElement("div");
    informacion.classList.add("modal-serie__informacion");

    const nombre = document.createElement("h2");
    nombre.classList.add("modal-serie__nombre");
    nombre.textContent = serie.name;

    const generos = document.createElement("p");
    generos.classList.add("modal-serie__generos");

    if (serie.genres.length > 0) {
        generos.textContent = serie.genres.join(" · ");
    } else {
        generos.textContent = "Sin género disponible";
    }

    const datos = document.createElement("div");
    datos.classList.add("modal-serie__datos");

    const calificacion = document.createElement("p");

    if (serie.rating.average !== null) {
        calificacion.textContent = "★ " + serie.rating.average;
    } else {
        calificacion.textContent = "Sin calificación";
    }

    const idioma = document.createElement("p");
    idioma.textContent = "Idioma: " + serie.language;

    const estreno = document.createElement("p");

    if (serie.premiered !== null) {
        estreno.textContent = "Estreno: " + serie.premiered;
    } else {
        estreno.textContent = "Fecha de estreno no disponible";
    }

    const estadoSerie = document.createElement("p");
    estadoSerie.textContent = "Estado: " + serie.status;

    datos.appendChild(calificacion);
    datos.appendChild(idioma);
    datos.appendChild(estreno);
    datos.appendChild(estadoSerie);

    const resumen = document.createElement("div");
    resumen.classList.add("modal-serie__resumen");

    if (serie.summary !== null) {
        resumen.innerHTML = serie.summary;
    } else {
        resumen.textContent = "No hay una descripción disponible.";
    }

    informacion.appendChild(nombre);
    informacion.appendChild(generos);
    informacion.appendChild(datos);
    informacion.appendChild(resumen);

    modalDetalles.appendChild(imagen);
    modalDetalles.appendChild(informacion);

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
};


//=============================================================
// CERRAR MODAL
//=============================================================

const ocultarModal = () => {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");

    modalDetalles.innerHTML = "";
};

cerrarModal.addEventListener("click", ocultarModal);

//=============================================================
//AGREGAR SERIES AL CATALOGO
//=============================================================

const mostrarSeries = (series) => {
    seriesGrid.innerHTML = "";

    series.forEach((serie) => {
        const tarjeta = crearTarjetaSerie(serie);

        seriesGrid.appendChild(tarjeta);
    });
};


//=============================================================
// OBTENER SERIES CON AXIOS
//=============================================================

const obtenerSeriesIniciales = async () => {
    mostrarMensaje("Cargando series...");

    try {
        const response = await axios.get("https://api.tvmaze.com/shows", {params: {page: 2}});

        const series = response.data;

        mostrarSeries(series);
        mostrarSerieDestacada(series[10]);
        ocultarMensaje();

    } catch (error) {
        console.log(
            "Error al cargar las series:",
            error
        );

        mostrarMensaje(
            "No fue posible cargar las series.",
            true
        );
    }
};


//=============================================================
// BUSCAR SERIES CON AXIOS
//=============================================================

const buscarSeries = async (busqueda) => {
    mostrarMensaje("Buscando series...");

    try {
        const response = await axios.get("https://api.tvmaze.com/search/shows",{params: {q: busqueda}});

        const series = response.data.map((resultado) => {
            return resultado.show;
        });

        if (series.length > 0) {
            mostrarSeries(series);
            mostrarSerieDestacada(series[0]);
            ocultarMensaje();
        } else {
            seriesGrid.innerHTML = "";

            mostrarMensaje(
                "No se encontraron series con ese nombre."
            );
        }
    } catch (error) {
        console.log(
            "Error al buscar las series:",
            error
        );

        mostrarMensaje(
            "No fue posible realizar la búsqueda.",
            true
        );
    }
};


//=============================================================
// FUNCION DEL BOTON DE BUSQUEDA
//=============================================================

formularioBusqueda.addEventListener("submit", (evento) => {
        
    evento.preventDefault();

    const busqueda = inputBusqueda.value.trim();

    if (busqueda !== "") {
            buscarSeries(busqueda);
        }
    }
);

document.addEventListener("DOMContentLoaded",obtenerSeriesIniciales);