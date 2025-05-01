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

function SearchColumn({ loading, setId, simplifiedView = false }) {
  const [searchResults, setSearchResults] = useState([]);
  function handleFuseSearch(searchVal) {
    const results = fuse.search(searchVal, { limit: 12 });
    setSearchResults(results);
  }

  return (
    <div className={`search-column ${simplifiedView ? 'simplified' : ''}`}>
      <SearchInput handleSearch={handleFuseSearch} loading={loading} />
      <SearchResults
        searchResults={searchResults}
        setId={setId}
        simplifiedView={simplifiedView}
      />
    </div>
  );
}

export default SearchColumn;
