import { useState } from 'react';
import { usePokemonData } from '../hooks/usePokemonData';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
// import ResponseColumn from '../components/Views/ResponseColumn/ResponseColumn';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';

export default function CompareStatsPage() {
  const [requestIdColumnOne, setRequestIdColumnOne] = useState(null);
  const [requestIdColumnTwo, setRequestIdColumnTwo] = useState(null);
  const { data: dataColumnOne, isLoading: isLoadingColumnOne } = usePokemonData(
    {
      id: requestIdColumnOne,
    }
  );
  const { data: dataColumnTwo, isLoading: isLoadingColumnTwo } = usePokemonData(
    {
      id: requestIdColumnTwo,
    }
  );
  return (
    <section className="compare-stats-container">
      <div>
        <SearchColumn
          loading={isLoadingColumnOne}
          setId={setRequestIdColumnOne}
          simplifiedView
        />
        {dataColumnOne ? (
          <PokemonDetails response={dataColumnOne} simplifiedView />
        ) : null}
      </div>
      <div>
        <SearchColumn
          loading={isLoadingColumnTwo}
          setId={setRequestIdColumnTwo}
          simplifiedView
        />
        {dataColumnTwo ? (
          <PokemonDetails response={dataColumnTwo} simplifiedView />
        ) : null}
      </div>
    </section>
  );
}
