import React from 'react';
import './App.css';
import './components/header.css'
import Header from './components/Header';
import Character from './components/Character';
import './components/character.css'



function App() {
  return (
    <div className="App">
      <Header />
      <h1>Personajes de Rick y Morty</h1>
      <Character />
    </div>
  );
}

export default App;
