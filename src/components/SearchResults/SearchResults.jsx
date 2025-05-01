import Button from '../Button/Button';

export default function SearchResults({
  searchResults,
  setId,
  empty = 'Type name above to see results.',
  simplifiedView,
}) {
  return (
    <div
      className={`search-results ${searchResults.length > 0 ? '' : 'inactive'}`}
    >
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((searchResult) => (
          <div key={searchResult.item.id} className="search-results-column">
            <Button
              variant="bordered"
              fullWidth
              text={searchResult.item.name}
              onClick={() => setId(searchResult.item.id)}
            />
          </div>
        ))
      ) : simplifiedView ? null : (
        <p className="muted">{empty}</p>
      )}
    </div>
  );
}
