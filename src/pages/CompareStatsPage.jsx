import { useContext } from 'react';
import { AppContext } from '../App';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import PokemonForm from '../components/PokemonDetails/PokemonForm';
import AlertComponent from '../components/AlertComponent/AlertComponent';

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
    <section className="compare-stats-container">
      <div>
        <SearchColumn
          loading={isLoadingCompareColumnOne}
          setId={setCompareIdColumnOne}
          simplifiedView
        />
        {compareColumnOneData ? (
          <PokemonDetails response={compareColumnOneData} simplifiedView />
        ) : null}
      </div>
      <div>
        <SearchColumn
          loading={isLoadingCompareColumnTwo}
          setId={setCompareIdColumnTwo}
          simplifiedView
        />
        {compareColumnTwoData ? (
          <PokemonDetails response={compareColumnTwoData} simplifiedView />
        ) : null}
      </div>
      <div className="compare-page-form">
        <PokemonForm />
        <AlertComponent />
      </div>
    </section>
  );
}
