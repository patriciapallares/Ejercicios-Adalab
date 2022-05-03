// debe retornar la promesa
// fetch del servidor
// no olvidarse el 2º return


function getDataApi() {
  return fetch('https://api.github.com/orgs/Adalab/repos')
    .then((response) => response.json())
    .then((data) => {
      return data.map((object) => ({
        id: object.id,
        full_name: object.full_name,
        image: object.owner.avatar_url,
      }));
    });
}

export default getDataApi;
