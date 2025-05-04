import { useContext } from 'react';
import { AppContext } from '../App';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
import ResponseColumn from '../components/Views/ResponseColumn/ResponseColumn';

export default function SearchPokemonPage() {
  const { setSearchId, searchLoading, searchData } = useContext(AppContext);
  return (
    <section className="search-pokemon-container">
      <SearchColumn loading={searchLoading} setId={setSearchId} />
      <ResponseColumn response={searchData} />
    </section>
  );
}
