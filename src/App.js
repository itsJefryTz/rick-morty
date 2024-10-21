import imageRickMorty from './img/rick-morty.png';
import imageGitHub from './img/GitHub_Logo_White.png';

// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [ characters, setCharacters ] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imageRickMorty} alt='rick-morty' className='img-home' />
          <button onClick={reqApi} className='btn-search'>Personajes</button>
          </>
        )}
        <br />
        <a href="https://github.com/itsJefryTz/rick-morty" target='_blank' className='text-grey-small'>
          <i class="bi bi-github"></i>
        </a>
        <br />
      </header>
    </div>
  );
}

export default App;
