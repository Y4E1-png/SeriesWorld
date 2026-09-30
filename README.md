English | [Leer en español](README.es.md)

# SeriesWorld

A responsive web application for browsing and searching TV shows using the public TVmaze API.

Developed as part of the Front-End Development program at EBAC to practice API integration, DOM manipulation, asynchronous JavaScript, and responsive styling with Sass.

**Live demo:** [SeriesWorld](https://seriesworld-project.web.app/)

## Features

- Load an initial catalog of TV shows.
- Display a featured show.
- Search for shows by name.
- View show ratings, genres, and status.
- Open a modal with additional information, including language, premiere date, and summary.
- Display loading messages, request errors, and searches without results.
- Display messages when certain show information is unavailable.
- Adapt the layout to different screen sizes.

## Technologies

- **HTML5:** page structure, search form, and modal.
- **CSS3:** compiled styles and responsive layout.
- **Sass (SCSS):** source styles compiled into CSS.
- **JavaScript:** DOM manipulation, event handling, and asynchronous requests.
- **Axios:** HTTP requests to the TVmaze API.
- **TVmaze API:** TV show information and images.
- **VS Code and Live Sass Compiler:** editing and compiling SCSS styles.

Axios is loaded through the jsDelivr CDN.

## Getting started

### Requirements

- A web browser.
- Git installed to clone the repository.
- An internet connection to load Axios and retrieve information from TVmaze.

### Installation and usage

1. Clone the repository and open its folder:

```bash
git clone https://github.com/Y4E1-png/SeriesWorld.git
cd SeriesWorld
```

2. Open `index.html` in your browser.

3. Wait for the initial catalog and featured show to load.

The compiled CSS is already included, so no dependency installation or compilation is required to view the application.

## Usage example

The application interface is in Spanish.

1. Enter a show name, such as `Friends`, in the search field.
2. Click **Buscar** or press Enter.
3. Wait for the results to appear.
4. Browse the show cards and their available information.
5. Click **Ver detalles** to open a show's information modal.
6. Close the modal using its **×** button.
7. Try another search to explore different shows.

The application displays a message when a search returns no results or a request fails. Available information depends on the data returned by TVmaze.

## API integration

The application retrieves TV show information through Axios.

**API documentation:** [TVmaze API](https://www.tvmaze.com/api)

The requests use these endpoints:

| Endpoint | Purpose |
|---|---|
| `https://api.tvmaze.com/shows?page=0` | Loads the initial catalog. |
| `https://api.tvmaze.com/search/shows?q=Friends` | Searches for shows by name. |

In search requests, the `q` parameter contains the text entered by the user.

Search responses contain objects with a `show` property. The application extracts those show objects and creates their cards in the DOM.

The details modal uses the information already retrieved for the selected show.

## Editing the styles

The source styles are located in `scss/styles.scss`. The page loads the compiled file `css/styles.css`.

To work with the SCSS styles:

1. Open the project folder in VS Code.
2. Install the **Live Sass Compiler** extension if it is not already available.
3. Open `scss/styles.scss`.
4. Click **Watch Sass** in the status bar.
5. Edit and save the SCSS file.
6. Reload the browser to view the updated styles.

The configuration in `.vscode/settings.json` saves the compiled CSS in the `css` folder.

## Project structure

```text
SeriesWorld/
├── .vscode/
│   └── settings.json  Live Sass Compiler configuration
├── css/
│   └── styles.css     Compiled styles
├── js/
│   └── main.js        API requests and interface interactions
├── scss/
│   └── styles.scss    Source styles
├── index.html         Application page
└── README.md          Project documentation
```

## Author

Developed by **Yael Aguilar** as part of the Front-End Development program at EBAC.

TV show information and images are retrieved from the TVmaze API.

[GitHub profile](https://github.com/Y4E1-png)
