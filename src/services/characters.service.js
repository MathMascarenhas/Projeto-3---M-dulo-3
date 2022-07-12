import { Characters } from '../models/Characters.js';

export const findAllCharacters = async () => await Characters.find();

export const findCharacterById = async (idParam) => await Characters.findById(idParam);

export const createCharacter = async (newCharacter) => await Characters.create(newCharacter);

export const updateCharacter = async (idParam, characterUpdate) => {
  return await Characters.findByIdAndUpdate(idParam, characterUpdate)
  .setOptions({
    returnOriginal: false,
  });
};

export const deleteCharacter = async (idParam) =>  await Characters.findByIdAndDelete(idParam);
