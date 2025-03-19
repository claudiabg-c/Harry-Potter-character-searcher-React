const callToApi = (searchHouse) => {
  return fetch(process.env.PUBLIC_URL + '/services/characters.json')
    .then((response) => response.json())
    .then((characters) => {
      const result = characters
        .filter((character) => character.house.toLowerCase() === searchHouse.toLowerCase())
        .map((character) => ({
          img: character.image,
          name: character.name,
          species: character.species,
          status: character.alive,
          gender: character.gender,
          nickName: character.alternate_names,
          houseOf: character.house.toLowerCase(),
        }));
      return result;
    });
};

export default callToApi;
