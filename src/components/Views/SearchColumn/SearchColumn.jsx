import { useEffect, useState, useContext } from 'react';
import { CompareStatsPageContext } from '../../../pages/CompareStatsPage';
import { AppContext } from '../../../App';
//search data
//search plugin
import Fuse from 'fuse.js';
//components
import SearchInput from '../../SearchInput/SearchInput';
import SearchResults from '../../SearchResults/SearchResults';

function SearchColumn({ loading, setId }) {
  const { pokemonListData } = useContext(AppContext);
  const { simplified } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };
  const fuse = new Fuse(pokemonListData, {
    keys: ['name'],
    minMatchCharLength: 2,
    threshold: 0.4,
  });
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
