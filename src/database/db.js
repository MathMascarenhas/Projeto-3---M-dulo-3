import mongoose from 'mongoose';
export const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado com sucesso!'))
    .catch((error) =>
      console.log(`Erro ao conectar com MongoDb, erro: ${error}`),
    );
};
