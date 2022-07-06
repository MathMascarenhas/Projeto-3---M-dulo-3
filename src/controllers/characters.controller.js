import {
  findAllCharacters,
  findCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from '../services/characters.service.js';

export const findAll = async (req, res) => {
  const allCharacters = await findAllCharacters();
  if (allCharacters.length === 0) {
    return res.status(404).send({ message: 'Nenhum personagem encontrado' });
  }
  res.send(allCharacters);
};

export const findById = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await findCharacterById(idParam);
  res.send(chosenCharacter);
};

export const createNewCharacter = async (req, res) => {
  const Character = req.body;
  const newCharacter = await createCharacter(Character);
  res.status(201).send(newCharacter);
};

export const characterUpdate = async (req, res) => {
  const idParam = req.params.id;
  const update = req.body;
  const updatedCharacter = await updateCharacter(idParam, update);
  res.send(updatedCharacter);
};

export const characterDelete = async (req, res) => {
  const idParam = req.params.id;
  await deleteCharacter(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};
