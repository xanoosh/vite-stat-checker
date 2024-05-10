import './styles/index.scss';
import SearchColumn from './components/Views/SearchColumn/SearchColumn';
import ResponseColumn from './components/Views/ResponseColumn/ResponseColumn';
import { useState } from 'react';
import { usePokemonData } from './hooks/usePokemonData';

function App() {
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

export default App;
