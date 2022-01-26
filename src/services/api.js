const callToApi = (searchHouse) => {
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${searchHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((character) => {
        return {
          img: character.image,
          name: character.name,
          species: character.species,
          status: character.alive,
          gender: character.gender,
          nickName: character.alternate_names,
          houseOf: character.house,
        };
      });
      return result;
    });
};

export default callToApi;
