import characters from './characters.json';

const callToApi = (searchHouse) => {
  return new Promise((resolve) => {
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

    resolve(result);
  });
};

export default callToApi;