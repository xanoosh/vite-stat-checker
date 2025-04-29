import { useState } from 'react';
import { usePokemonData } from '../hooks/usePokemonData';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
import ResponseColumn from '../components/Views/ResponseColumn/ResponseColumn';

export default function SearchPokemonPage() {
  const [requestId, setRequestId] = useState(null);
  const { data, isLoading } = usePokemonData({
    id: requestId,
  });
  return (
    <div className="container">
      <SearchColumn loading={isLoading} setId={setRequestId} />
      <ResponseColumn response={data} />
    </div>
  );
}
