import mongoose from 'mongoose';
import { Characters } from '../models/Characters.js';

export const validId = async (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  if ((await Characters.findById(idParam)) === null) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  next();
};

export const validCreate = async (req, res, next) => {
  const newCharacter = req.body;
  if (!newCharacter.name || !newCharacter.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Por favor preencha todos os campos!' });
  }
  if (await Characters.exists({ name: newCharacter.name })) {
    return res.status(400).send({ message: 'Personagem já está cadastrado!' });
  }
  next();
};

export const validUpdate = async (req, res, next) => {
  const characterUpdate = req.body;
  const idParam = req.params.id;
  if (!characterUpdate.name || !characterUpdate.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Por favor preencher todos os campos!' });
  }
  const characterUnupdated = await Characters.findById(idParam);
  if (
    characterUpdate.name === characterUnupdated.name &&
    characterUpdate.imageUrl === characterUnupdated.imageUrl
  ) {
    return res.status(400).send({ message: 'Por favor altere um dos campos' });
  }
  next();
};
