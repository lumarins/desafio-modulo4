import express from 'express';
import { Grade } from '../models/grades.js';

const app = express();

app.get('/grades', async (req, res) => {
  const grades = await Grade.find({});

  try {
    res.send(grades);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/grades', async (req, res) => {
  const grade = new Grade(req.body);

  try {
    await grade.save();
    res.send(grade);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/grades/:id', async (req, res) => {
  try {
    const grade = await Grade.findOneAndDelete(req.params.id);

    if (!grade) {
      res.status(404).send('Documento nao encontrado');
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/grades/:id', async (req, res) => {
  try {
    const grade = await Grade.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(grade);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as gradesRouter };