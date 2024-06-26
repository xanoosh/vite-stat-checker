import { useState } from 'react';
//search data
import { pokemonArray } from '../../../data';
//search plugin
import Fuse from 'fuse.js';
const fuse = new Fuse(pokemonArray, {
  keys: ['name'],
  minMatchCharLength: 2,
  threshold: 0.4,
});
//components
import SearchInput from '../../SearchInput/SearchInput';
import SearchResults from '../../SearchResults/SearchResults';

function SearchColumn({ loading, setId }) {
  const [searchResults, setSearchResults] = useState([]);
  function handleFuseSearch(searchVal) {
    const results = fuse.search(searchVal, { limit: 12 });
    setSearchResults(results);
  }

  return (
    <div className="search-column">
      <h1>Stat checker</h1>
      <SearchInput handleSearch={handleFuseSearch} loading={loading} />
      <SearchResults searchResults={searchResults} setId={setId} />
    </div>
  );
}

export default SearchColumn;
