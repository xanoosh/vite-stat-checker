import { useState } from 'react';
//search data
import { pokemonArray } from './../../data';
//search plugin
import Fuse from 'fuse.js';
const fuse = new Fuse(pokemonArray, {
  keys: ['name'],
  minMatchCharLength: 2,
  threshold: 0.4,
});
//components
import SearchInput from './searchInput';
import SearchResults from './SearchResults';

function SearchColumn({ setResponse }) {
  const [searchResults, setSearchResults] = useState([]);
  function handleFuseSearch(searchVal) {
    const results = fuse.search(searchVal);
    setSearchResults(results);
    console.log(results);
  }

  return (
    <div className="search-column">
      <h1>Stat checker</h1>
      <SearchInput handleSearch={handleFuseSearch} />
      <SearchResults searchResults={searchResults} setResponse={setResponse} />
    </div>
  );
}

export default SearchColumn;
