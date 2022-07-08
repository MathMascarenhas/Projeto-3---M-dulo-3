import express from 'express';
const router = express.Router();
import {
  findAll,
  findById,
  createNewCharacter,
  characterUpdate,
  characterDelete,
} from '../controllers/characters.controller.js';
import { validId, validCreate, validUpdate } from '../middleware/characters.middleware.js'

router.get('/characters', findAll);
router.get('/characters/find/:id', validId,findById);
router.post('/characters/create', validCreate, createNewCharacter);
router.put('/characters/update/:id', validId, validUpdate, characterUpdate);
router.delete('/characters/delete/:id', validId, characterDelete);

export default router;
