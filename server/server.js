const express = require('express');
const path = require('path');
const notesController = require('./controllers/notesController.js');

const app = express();
const PORT = 3000;

app.use(express.json());

// get all notes
app.get('/notes', notesController.getNotes, (req, res) => {
  res.json(res.locals.notes);
});

// post request to add a note
app.post(
  '/addnote',
  notesController.addNote,
  notesController.getNotes,
  (req, res) => {
    res.json(res.locals.notes);
  }
);

// delete request to delete a note
app.delete(
  '/deletenote',
  notesController.deleteNote,
  notesController.getNotes,
  (req, res) => {
    res.json(res.locals.notes);
  }
);

// post to request to like a not
app.post('/addLike', notesController.addLike, (req, res) => {
  res.json(res.locals.notes);
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on all the pages
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

//listen
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
