import mongoose from 'mongoose';
const uri = 'mongodb://localhost:27017/db_api_rick_and_morty';

export const connectToDatabase = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado com sucesso!'))
    .catch((error) =>
      console.log(`Erro ao conectar com MongoDb, erro: ${error}`),
    );
};
