import { handleApiCall } from '../../utils/functions';
import Button from '../Button/Button';

export default function SearchResults({ searchResults, setResponse }) {
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        searchResults.map((searchResult) => (
          <div key={searchResult.item.id} className="search-results-column">
            <Button
              variant="bordered"
              text={searchResult.item.name}
              onClick={() => handleApiCall(searchResult.item.id, setResponse)}
            />
          </div>
        ))
      ) : (
        <p className="muted">No results.</p>
      )}
    </div>
  );
}
