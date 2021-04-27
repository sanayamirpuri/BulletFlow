import React, { Component } from 'react';
import NotesFeed from './containers/notesFeed.jsx';

class App extends Component {
  render() {
    return (
      <div className="notes-feed">
        <NotesFeed />
      </div>
    );
  }
}

export default App;
