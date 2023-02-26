import './App.css';
import { useState } from 'react';
import { pokemonArray } from './data';
import Fuse from 'fuse.js';
const fuse = new Fuse(pokemonArray, {
  keys: ['name'],
  minMatchCharLength: 2,
  threshold: 0.4,
});

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  function handleFuseSearch(searchVal) {
    const results = fuse.search(searchVal);
    setSearchResults(results);
    console.log(results);
  }

  return (
    <div className="App">
      <h1>Stat checker</h1>
      <div className="card">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleFuseSearch(e.target.value);
          }}
        />
      </div>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((searchResult) => <p>{searchResult.item.name}</p>)
        ) : (
          <p className="read-the-docs">No results.</p>
        )}
      </div>
    </div>
  );
}

export default App;
