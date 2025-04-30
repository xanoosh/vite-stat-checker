import { useState } from 'react';
import { usePokemonData } from '../hooks/usePokemonData';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
// import ResponseColumn from '../components/Views/ResponseColumn/ResponseColumn';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';

export default function CompareStatsPage() {
  const [requestId, setRequestId] = useState(null);
  const { data, isLoading } = usePokemonData({
    id: requestId,
  });
  return (
    <section className="compare-stats-container">
      <div>
        <SearchColumn loading={isLoading} setId={setRequestId} simplifiedView />
        {data ? <PokemonDetails response={data} simplifiedView /> : null}
      </div>
      <div>
        <SearchColumn loading={isLoading} setId={setRequestId} simplifiedView />
        {data ? <PokemonDetails response={data} simplifiedView /> : null}
      </div>
    </section>
  );
}
