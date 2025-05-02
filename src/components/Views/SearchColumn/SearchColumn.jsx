import { useEffect, useState } from 'react';
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
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //fuse search on input change
  useEffect(() => {
    if (searchValue.length > 0) {
      const results = fuse.search(searchValue, {
        limit: simplifiedView ? 6 : 12,
      });
      setSearchResults(results);
    }
  }, [searchValue]);

  return (
    <div className={`search-column ${simplifiedView ? 'simplified' : ''}`}>
      <SearchInput
        loading={loading}
        value={searchValue}
        setValue={setSearchValue}
      />
      <SearchResults
        searchResults={searchResults}
        setId={setId}
        simplifiedView={simplifiedView}
        handleClearValue={() => {
          setSearchValue('');
          setSearchResults([]);
        }}
      />
    </div>
  );
}

export default SearchColumn;
