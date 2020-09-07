import express from 'express';
import mongoose from 'mongoose';
import { gradesRouter } from './routes/grades.js';

const app = express();

/*Conexao com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();


app.get('/', (req, res) => { res.status(200).send('Works!')})
app.use(express.json());
app.use(gradesRouter);

app.listen(process.env.PORT, () => console.log('Servidor em execucao'));