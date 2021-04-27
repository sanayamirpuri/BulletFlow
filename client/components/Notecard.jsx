import React, { Component } from 'react';

const Note = (props) => {
  return (
    <div className="note-card">
      <div className="note-text">{props.note.note}</div>

      <button
        className="delete-button"
        id={props.id}
        onClick={(event) => props.deleteNote(event)}
      >
        Delete
      </button>

      <button className="edit-button">Gimmie Some Sunshine</button>
    </div>
  );
};

export default Note;
