// js del servicio. DEVBEMOS EXPORTARLO
// que no se nos olviden los returns para poder exportarlo correctamente
function getMovies() {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adamdb-v1/books_with_id.json'
  )
    .then((response) => response.json())
    .then((data => {
      // podríamos limpiar data aquí con un map
      const cleanData = data.map(item => {
        return {
          name: item.title,
          year: item.year,
          id: item.id
        }
      })
      return cleanData;
    }));
}

const objectToExport = {
  movies: getMovies()
}

export default getMovies;