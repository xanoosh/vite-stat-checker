import './styles/index.scss';
import SearchColumn from './components/Views/SearchColumn/SearchColumn';
import ResponseColumn from './components/Views/ResponseColumn/ResponseColumn';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  return (
    <div className="container">
      <SearchColumn setResponse={setResponse} />
      <ResponseColumn response={response} />
    </div>
  );
}

export default App;
