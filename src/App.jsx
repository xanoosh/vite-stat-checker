import './styles/index.scss';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { usePokemonData } from './hooks/usePokemonData';

export const AppContext = createContext();

function App() {
  const [searchId, setSearchId] = useState(null);
  const [compareIdColumnOne, setCompareIdColumnOne] = useState(null);
  const [compareIdColumnTwo, setCompareIdColumnTwo] = useState(null);

  const { data: searchData, isLoading: searchLoading } = usePokemonData({
    id: searchId,
  });
  const { data: compareColumnOneData, isLoading: isLoadingCompareColumnOne } =
    usePokemonData({
      id: compareIdColumnOne,
    });
  const { data: compareColumnTwoData, isLoading: isLoadingCompareColumnTwo } =
    usePokemonData({
      id: compareIdColumnTwo,
    });
  const navigationArray = [
    { path: '/', name: 'Search' },
    { path: 'compare', name: 'Compare' },
  ];
  return (
    <main>
      <NavBar navigationArray={navigationArray} />
      <section>
        <AppContext.Provider
          value={{
            setSearchId,
            searchData,
            searchLoading,
            setCompareIdColumnOne,
            compareColumnOneData,
            isLoadingCompareColumnOne,
            setCompareIdColumnTwo,
            compareColumnTwoData,
            isLoadingCompareColumnTwo,
          }}
        >
          <Outlet />
        </AppContext.Provider>
      </section>
    </main>
  );
}

export default App;
