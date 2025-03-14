const callToApi = (searchHouse) => {
  return fetch(`/api/characters/house/${searchHouse}`, {
    mode: 'no-cors'
  })
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
          houseOf: character.house.toLowerCase(),
        };
      });
      return result;
    });
};

export default callToApi;
