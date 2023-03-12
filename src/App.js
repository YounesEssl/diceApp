import React, { Component } from 'react';
import './App.css'; // import du fichier CSS
import { db } from './firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      selectedGame: null
    };
  }

  componentDidMount() {
    // Récupération des jeux depuis Firestore
    db.collection('games').get()
      .then(querySnapshot => {
        const games = querySnapshot.docs.map(doc => doc.data());
        this.setState({ games });
      })
      .catch(error => console.log(error));
  }

  selectRandomGame = () => {
    const { games } = this.state;
    const randomIndex = Math.floor(Math.random() * games.length);
    const selectedGame = games[randomIndex];
    this.setState({ selectedGame });
  }

  render() {
    const { selectedGame } = this.state;
    return (
      <div>
        <button onClick={this.selectRandomGame}>Choisir un jeu aléatoire</button>
        {selectedGame && (
          <div>
            <h2>{selectedGame.name}</h2>
            <p>{selectedGame.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
