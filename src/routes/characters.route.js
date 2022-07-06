import express from 'express';
const router = express.Router();
import {
  findAll,
  findById,
  createNewCharacter,
  characterUpdate,
  characterDelete,
} from '../controllers/characters.controller.js';
import { validId, validObject } from '../middleware/characters.middleware.js'

router.get('/characters', findAll);
router.get('/characters/find/:id', validId,findById);
router.post('/characters/create', validObject, createNewCharacter);
router.put('/characters/update/:id', validId, validObject,characterUpdate);
router.delete('/characters/delete/:id', validId, characterDelete);

export default router;
