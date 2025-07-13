const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

const DB_PATH = path.join(__dirname, 'notes.json');

app.get('/', (req, res) => {
  res.send('<h2>🚀 Notes API running on ECS Fargate!</h2>');
});

app.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  const newNote = {
    id: notes.length + 1,
    content: req.body.content || 'Empty note',
  };
  notes.push(newNote);
  fs.writeFileSync(DB_PATH, JSON.stringify(notes, null, 2));
  res.status(201).json(newNote);
});

app.listen(PORT, () => {
  console.log(`App running on http://0.0.0.0:${PORT}`);
});
