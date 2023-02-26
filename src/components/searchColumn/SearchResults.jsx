import { handleApiCall } from './../../utils/functions';

function SearchResults({ searchResults, setResponse }) {
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        searchResults.map((searchResult) => (
          <button
            key={searchResult.item.id}
            onClick={() => handleApiCall(searchResult.item.id, setResponse)}
          >
            {searchResult.item.name}
          </button>
        ))
      ) : (
        <p className="gray">No results.</p>
      )}
    </div>
  );
}

export default SearchResults;
