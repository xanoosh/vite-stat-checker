import './styles/index.scss';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { usePokemonData } from './hooks/usePokemonData';
import { usePokemonList } from './hooks/usePokemonList';
import Loader from './components/Loader/Loader';

export const AppContext = createContext();

function App() {
  const [searchId, setSearchId] = useState(null);
  const [compareIdColumnOne, setCompareIdColumnOne] = useState(null);
  const [compareIdColumnTwo, setCompareIdColumnTwo] = useState(null);

  const { data: pokemonListData, isLoading: pokemonListLoading } =
    usePokemonList({
      number: 10000,
    });
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
  return pokemonListLoading ? (
    <Loader />
  ) : (
    <main>
      <NavBar navigationArray={navigationArray} />
      <section>
        {pokemonListData?.length > 0 ? (
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
              pokemonListData,
            }}
          >
            <Outlet />
          </AppContext.Provider>
        ) : (
          'failed to fetch list of pokemon'
        )}
      </section>
    </main>
  );
}

export default App;
