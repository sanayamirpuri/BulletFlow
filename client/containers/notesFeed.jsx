import React, { Component } from 'react';
import axios from 'axios';
import NotesBox from './NotesBox.jsx';

class notesFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      notes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    fetch('/notes')
      .then((res) => res.json())
      .then((notes) => {
        //fetch all of our data from database and put it into state array
        this.setState({ notes });
        //console.log(this.state);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      note: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/addnote', this.state)
      .then((res) => this.setState({ note: '', notes: res.data }));
  }

  deleteNote(event) {
    axios
      .delete('/deletenote', { data: { id: event.target.id } })
      .then((res) => {
        this.setState({ notes: res.data });
      });
  }

  render() {
    return (
      <div className="main-container">
        <NotesBox
          notes={this.state.notes}
          note={this.state.note}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default notesFeed;
