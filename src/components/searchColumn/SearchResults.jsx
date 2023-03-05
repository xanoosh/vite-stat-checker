import { handleApiCall } from './../../utils/functions';

function SearchResults({ searchResults, setResponse }) {
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        searchResults.map((searchResult) => (
          <div key={searchResult.item.id} className="search-results-column">
            <button
              onClick={() => handleApiCall(searchResult.item.id, setResponse)}
            >
              {searchResult.item.name}
            </button>
          </div>
        ))
      ) : (
        <p className="muted">No results.</p>
      )}
    </div>
  );
}

export default SearchResults;
