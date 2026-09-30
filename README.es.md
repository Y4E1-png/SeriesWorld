[Read in English](README.md) | Español

# SeriesWorld

Aplicación web con diseño responsivo para explorar y buscar series de televisión utilizando la API pública de TVmaze.

Desarrollada como parte del programa de Desarrollo Front-End de EBAC para practicar la integración con una API, la manipulación del DOM, JavaScript asíncrono y los estilos responsivos con Sass.

**Sitio publicado:** [SeriesWorld](https://seriesworld-project.web.app/)

## Funcionalidades

- Cargar un catálogo inicial de series.
- Mostrar una serie destacada.
- Buscar series por nombre.
- Consultar la calificación, los géneros y el estado de cada serie.
- Abrir una ventana modal con información adicional, como idioma, fecha de estreno y descripción.
- Mostrar mensajes de carga, errores en las peticiones y búsquedas sin resultados.
- Mostrar mensajes cuando ciertos datos de una serie no están disponibles.
- Adaptar el diseño a diferentes tamaños de pantalla.

## Tecnologías

- **HTML5:** estructura de la página, formulario de búsqueda y ventana modal.
- **CSS3:** estilos compilados y diseño responsivo.
- **Sass (SCSS):** estilos fuente que se compilan a CSS.
- **JavaScript:** manipulación del DOM, manejo de eventos y peticiones asíncronas.
- **Axios:** peticiones HTTP a la API de TVmaze.
- **API de TVmaze:** información e imágenes de series de televisión.
- **VS Code y Live Sass Compiler:** edición y compilación de estilos SCSS.

Axios se carga mediante la CDN de jsDelivr.

## Cómo ejecutar el proyecto

### Requisitos

- Un navegador web.
- Git instalado para clonar el repositorio.
- Conexión a Internet para cargar Axios y consultar la información de TVmaze.

### Instalación y uso

1. Clona el repositorio y abre su carpeta:

```bash
git clone https://github.com/Y4E1-png/SeriesWorld.git
cd SeriesWorld
```

2. Abre `index.html` en el navegador.

3. Espera a que se carguen el catálogo inicial y la serie destacada.

El CSS compilado ya está incluido, por lo que no es necesario instalar dependencias ni compilar los estilos para visualizar la aplicación.

## Ejemplo de uso

La interfaz de la aplicación está en español.

1. Escribe el nombre de una serie, por ejemplo `Friends`, en el campo de búsqueda.
2. Presiona **Buscar** o la tecla Enter.
3. Espera a que aparezcan los resultados.
4. Explora las tarjetas de las series y su información disponible.
5. Presiona **Ver detalles** para abrir la ventana modal de una serie.
6. Cierra la ventana modal mediante su botón **×**.
7. Realiza otra búsqueda para explorar diferentes series.

La aplicación muestra un mensaje cuando una búsqueda no devuelve resultados o una petición falla. La información disponible depende de los datos que devuelve TVmaze.

## Integración con la API

La aplicación obtiene información de series de televisión mediante Axios.

**Documentación de la API:** [API de TVmaze](https://www.tvmaze.com/api)

Las peticiones utilizan estos endpoints:

| Endpoint | Función |
|---|---|
| `https://api.tvmaze.com/shows?page=0` | Carga el catálogo inicial. |
| `https://api.tvmaze.com/search/shows?q=Friends` | Busca series por nombre. |

En las peticiones de búsqueda, el parámetro `q` contiene el texto escrito por el usuario.

Las respuestas de búsqueda contienen objetos con una propiedad `show`. La aplicación extrae esos objetos de series y crea sus tarjetas en el DOM.

La ventana modal de detalles utiliza la información que ya se obtuvo para la serie seleccionada.

## Modificación de los estilos

Los estilos fuente se encuentran en `scss/styles.scss`. La página carga el archivo compilado `css/styles.css`.

Para trabajar con los estilos SCSS:

1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Sass Compiler** si todavía no está disponible.
3. Abre `scss/styles.scss`.
4. Presiona **Watch Sass** en la barra de estado.
5. Modifica y guarda el archivo SCSS.
6. Recarga el navegador para visualizar los estilos actualizados.

La configuración de `.vscode/settings.json` guarda el CSS compilado en la carpeta `css`.

## Estructura del proyecto

```text
SeriesWorld/
├── .vscode/
│   └── settings.json  Configuración de Live Sass Compiler
├── css/
│   └── styles.css     Estilos compilados
├── js/
│   └── main.js        Peticiones a la API e interacciones de la interfaz
├── scss/
│   └── styles.scss    Estilos fuente
├── index.html         Página de la aplicación
└── README.md          Documentación del proyecto
```

## Autor

Desarrollado por **Yael Aguilar** como parte del programa de Desarrollo Front-End de EBAC.

La información y las imágenes de las series se obtienen de la API de TVmaze.

[Perfil de GitHub](https://github.com/Y4E1-png)
