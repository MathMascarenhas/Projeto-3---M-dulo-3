import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './src/database/db.js';
import router from './src/routes/characters.route.js'

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
