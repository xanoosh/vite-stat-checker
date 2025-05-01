import Button from '../Button/Button';

export default function SearchResults({
  searchResults,
  setId,
  empty = 'Type name above to see results.',
  simplifiedView,
  handleClearValue,
}) {
  return (
    <div
      className={`search-results ${
        simplifiedView && searchResults.length > 0 ? '' : 'inactive'
      }`}
    >
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((searchResult) => (
          <div key={searchResult.item.id} className="search-results-column">
            <Button
              variant="bordered"
              fullWidth
              text={searchResult.item.name}
              onClick={() => {
                setId(searchResult.item.id);
                if (simplifiedView) {
                  handleClearValue();
                }
              }}
            />
          </div>
        ))
      ) : simplifiedView ? null : (
        <p className="muted">{empty}</p>
      )}
    </div>
  );
}
