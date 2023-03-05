import './styles/index.css';
import SearchColumn from './components/searchColumn/SearchColumn';
import ResponseColumn from './components/responseColumn/ResponseColumn';
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
