import mongoose from 'mongoose';
import { findCharacterById } from '../services/characters.service.js';
export const validId = async (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  if (await findCharacterById(idParam) === null) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  next();
};

export const validObject = (req, res, next) => {
  const character = req.body;
  if (!character.name || !character.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Por favor preencha todos os campos!' });
  }
  next();
};
