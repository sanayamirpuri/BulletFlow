import React, { Component } from 'react';
import NoteCard from '../components/Notecard.jsx';

const NotesBox = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="notes-container">
        <div className="notes-input">
          <form id="input-form" onSubmit={props.handleSubmit}>
            <input
              type="text"
              placeholder="Enter Text"
              name="note-fill"
              onChange={(event) => props.handleChange(event)}
              value={props.note}
            />
            <button type="submit">Add Note</button>
          </form>
        </div>

        <div className="all-notecards">
          <h2>All Your Sweet Nothings</h2>

          {props.notes.map((note) => (
            <NoteCard
              note={note}
              key={note._id}
              id={note._id}
              deleteNote={props.deleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesBox;

/*
    <div className="main-container">
      <form id="input-form">
        <input type="text" placeholder="Enter Text" />
        <button type="submit">Add Note</button>
      </form>

      <div className="notes-container">
        <h3>All Your Sweet Nothings</h3>
        <Note notes={this.state.notes} />
      </div>
    </div>
*/
