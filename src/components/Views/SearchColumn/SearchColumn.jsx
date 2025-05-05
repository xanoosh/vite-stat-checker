import { useEffect, useState, useContext } from 'react';
import { CompareStatsPageContext } from '../../../pages/CompareStatsPage';
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
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { simplified } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };

  //fuse search on input change
  useEffect(() => {
    if (searchValue.length > 0) {
      const results = fuse.search(searchValue, {
        limit: simplified ? 6 : 12,
      });
      setSearchResults(results);
    }
  }, [searchValue]);

  return (
    <div className={`search-column ${simplified ? 'simplified' : ''}`}>
      <SearchInput
        loading={loading}
        value={searchValue}
        setValue={setSearchValue}
      />
      <SearchResults
        searchResults={searchResults}
        setId={setId}
        handleClearValue={() => {
          setSearchValue('');
          setSearchResults([]);
        }}
      />
    </div>
  );
}

export default SearchColumn;
