//https://randomuser.me/api/?results=50

const getApiData = () => {
  return fetch('https://randomuser.me/api/?results=50')
    .then((Response) => Response.JSON())
    .then((data) => {
      // como nos quedamos solo con results (ver API) tenemos que hacer el map en data.results
      const dataClean = data.results.map((user) => {
        // return de un objeto con los datos que nos interesan (+ID)
        // si la API no nos proporciona un ID nos tendremos que inventar uno nosotras
        // lo que tengo quedevolver para crear el array
        return {
          id: user.login.uuid,
          age: user.dob.age,
          city: user.location.city,
          country: user.location.country,
          image: user.picture.large,
          fullName: `${user.name.first} ${user.name.last}`,
          email: user.email,
        };
      });
      return dataClean;
    });
};
 
export default getApiData;