import Button from '../Button/Button';
import { useContext } from 'react';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';
import { formatPokemonName, isGmax, isMega } from '../../utils/functions';

export default function SearchResults({
  searchResults,
  setId,
  empty = 'Type name above to see results.',
  handleClearValue,
}) {
  const { simplified } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };
  return (
    <div
      className={`search-results ${
        simplified && searchResults.length > 0 ? '' : 'inactive'
      }`}
    >
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((searchResult) => (
          <div key={searchResult.item.id} className="search-results-column">
            <Button
              variant="bordered"
              fullWidth
              text={formatPokemonName(searchResult.item.name)}
              isMega={isMega(searchResult.item.name)}
              isGmax={isGmax(searchResult.item.name)}
              onClick={() => {
                setId(searchResult.item.id);
                if (simplified) {
                  handleClearValue();
                }
              }}
            />
          </div>
        ))
      ) : simplified ? null : (
        <p className="muted">{empty}</p>
      )}
    </div>
  );
}
