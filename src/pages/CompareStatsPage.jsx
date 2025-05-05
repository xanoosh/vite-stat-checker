import { useContext } from 'react';
import { AppContext } from '../App';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import PokemonForm from '../components/PokemonDetails/PokemonForm';
import AlertComponent from '../components/AlertComponent/AlertComponent';
import EquationComponent from '../components/EquationComponent/EquationComponent';

export default function CompareStatsPage() {
  const {
    setCompareIdColumnOne,
    compareColumnOneData,
    isLoadingCompareColumnOne,
    setCompareIdColumnTwo,
    compareColumnTwoData,
    isLoadingCompareColumnTwo,
  } = useContext(AppContext);
  return (
    <>
      <section className="compare-stats-search-container">
        <div>
          <SearchColumn
            loading={isLoadingCompareColumnOne}
            setId={setCompareIdColumnOne}
            simplifiedView
          />
        </div>
        <div>
          <SearchColumn
            loading={isLoadingCompareColumnTwo}
            setId={setCompareIdColumnTwo}
            simplifiedView
          />
        </div>
      </section>

      <section className="compare-stats-stat-container">
        <div className="compare-stats-card">
          {compareColumnOneData ? (
            <PokemonDetails response={compareColumnOneData} simplifiedView />
          ) : null}
        </div>
        <EquationComponent
          leftStats={compareColumnOneData}
          rightStats={compareColumnTwoData}
        />
        <div className="compare-stats-card">
          {compareColumnTwoData ? (
            <PokemonDetails response={compareColumnTwoData} simplifiedView />
          ) : null}
        </div>
      </section>

      <div className="compare-page-form">
        <PokemonForm />
        <AlertComponent />
      </div>
    </>
  );
}
