const fs = require('fs');
const path = require('path');
//const webpack = require('webpack');
const Note = require('../models/notesModel');

let notesList;

const notesController = {};

notesController.getNotes = (req, res, next) => {
  notesList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../../db/notes.json'))
  );
  res.locals.notes = notesList;
  next();
};

notesController.addNote = (req, res, next) => {
  const note = new Note({ note: req.body.note, liked: false });
  notesList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../../db/notes.json'))
  );

  notesList.push(note);

  fs.writeFileSync(
    path.resolve(__dirname, '../../db/notes.json'),
    JSON.stringify(notesList),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  next();
};

notesController.deleteNote = (req, res, next) => {
  //console.log('getting to delete');
  notesList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../../db/notes.json'))
  );

  notesList = notesList.filter((note) => note._id !== req.body.id);

  fs.writeFileSync(
    path.resolve(__dirname, '../../db/notes.json'),
    JSON.stringify(notesList),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  next();
};

notesController.addLike = (req, res, next) => {
  notesList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../../db/notes.json'))
  );

  notesList = notesList.map((note) => {
    if (note._id === req.body.id) {
      note.liked = !note.liked;
    }
    return note;
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../../db/notes.json'),
    JSON.stringify(notesList),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  res.locals.notes = notesList;
  next();
};

module.exports = notesController;
