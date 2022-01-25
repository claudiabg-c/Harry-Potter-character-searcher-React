const callToApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((character) => {
        return {
          img: character.image,
          name: character.name,
          species: character.species,
        };
      });
      return result;
    });
};

export default callToApi;
